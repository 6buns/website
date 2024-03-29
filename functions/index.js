/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const crypto = require("crypto");
admin.initializeApp(functions.config().firebase);

const stripe = require("stripe")(functions.config().stripe.secretkey);
const firestore = admin.firestore();
const auth = admin.auth();
// const YOUR_DOMAIN = "https://6buns.com";
const YOUR_DOMAIN = "http://localhost:5000";


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.createStripeCustomer = functions.auth.user().onCreate((user) => {
  return stripe.customers.create({
    name: user.displayName,
    email: user.email,
  }).then((customer) => {
    const customerRef = firestore.collection("customers").doc(user.uid);

    return customerRef.set({
      userId: user.uid,
      apiKey: "",
      hasSubcription: false,
      rooms: "",
      avgPeer: "",
      avgDuration: "",
      customerId: customer.id,
      createdAt: Date.now(),
      lastPaymentAt: "",
    });
  }).catch((err) => {
    console.error(err);
  });
});

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const event = stripe.webhooks.constructEvent(req.body, req.headers["stripe-signature"], functions.config().stripe.webhooksecret);

  const hook = event.type;
  const data = event.data.object;
  const customerRef = firestore.collection("customers");

  switch (hook) {
    case "invoice.paid": {
      const customerId = data.customer;

      return customerRef.doc(customerId).set({
        active: true,
        lastPaymentAt: firestore.FieldValue.serverTimestamp,
        subscrition: {
          status: data.status,
        },
      });
    }
    case "invoice.payment_action_required": {
      const customerId = data.customer;

      return customerRef.doc(customerId).update({
        active: false,
        lastPaymentAt: firestore.FieldValue.serverTimestamp,
        subscrition: {
          status: data.status,
        },
      });
    }
    case "invoice.payment_failed": {
      const customerId = data.customer;

      return await customerRef.doc(customerId).update({
        active: false,
        lastPaymentAt: firestore.FieldValue.serverTimestamp,
        subscrition: {
          status: data.status,
        },
      });
    }
    case "customer.subscription.created": {
      const customerId = data.customer;
      const keyStoreRef = firestore.collection("keyStore");

      const doc = await customerRef.doc(customerId).get();
      const data = doc.data();
      const apiKey = crypto.randomBytes(99).toString("hex");
      const apiKeyHash = crypto.createHash("md5").update(apiKey).digest("hex");
      await keyStoreRef.doc(apiKeyHash).set({
        customerId,
        active: true,
        userId: data.userId,
        apiKey,
        secretKeyHash: "",
      });
      return await customerRef.doc(customerId).set({
        apiKey,
        hasSubcription: true,
        subscrition: {
          active: true,
          status: data.status,
          id: data.id,
          itemId: data.items["data"][0].id,
        },
      });
    }
    case "customer.subscription.deleted": {
      const customerId = data.customer;
      const keyStoreRef = firestore.collection("keyStore");

      const doc = await customerRef.doc(customerId).get();
      const data = doc.data();
      const apiKey = data.apiKey;
      const apiKeyHash = crypto.createHash("md5").update(apiKey).digest("hex");
      await keyStoreRef.doc(apiKeyHash).delete();
      return await customerRef.doc(customerId).update({
        apiKey: "",
        hasSubcription: false,
        subscrition: {},
      });
    }
    case "customer.updated": {
      const customerRef = firestore.collection("customers");

      const doc = await customerRef.doc(data.id).get();
      const customer = doc.data();
      const userData = await auth.getUser(customer.userId);
      const update = {};


      if (data.name && (data.name !== userData.name || !userData.name)) {
        update["auth"]["displayName"] = data.name;
      }
      if (data.email && (data.email !== userData.email || !userData.email)) {
        update["auth"]["email"] = data.email;
      }
      if (data.phone && (data.phone !== userData.phoneNumber || !userData.phoneNumber)) {
        update["auth"]["phoneNumber"] = data.phone;
      }
      if (data.address && (data.address !== userData.metadata.address || !userData.metadata.address)) {
        update["auth"]["metadata"]["address"] = data.address;
      }
      if (data.shipping && (data.shipping !== userData.metadata.shipping || !userData.metadata.shipping)) {
        update["auth"]["metadata"]["shipping"] = data.shipping;
      }

      if (Object.keys(update).length > 0) {
        const updateData = update["auth"];
        return await auth.updateUser(customer.userId, updateData);
      } else return;
    }
  }
});

exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
  const { priceId, customerId } = req.body;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
      },
    ],
    customer: customerId,
    billing_address_collection: "auto",
    mode: "subscription",
    success_url: `${YOUR_DOMAIN}/subscription/success/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${YOUR_DOMAIN}/subscription/cancel`,
  });

  res.redirect(303, session.url);
});

exports.createPortalSession = functions.https.onRequest(async (req, res) => {
  const { sessionId, customerId } = req.body;
  console.log(`${customerId ? customerId : sessionId}`);
  const returnUrl = YOUR_DOMAIN;
  let portalSession = "";

  if (customerId) {
    portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    });
  } else {
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

    portalSession = await stripe.billingPortal.sessions.create({
      customer: checkoutSession.customer,
      return_url: returnUrl,
    });
  }

  res.redirect(303, portalSession.url);
});

exports.generateNewSecret = functions.https.onRequest(async (req, res) => {
  console.log(typeof req.body);
  const { apiKey } = JSON.parse(req.body);
  const keyStoreRef = firestore.collection("keyStore");
  const apiKeyHash = crypto.createHash("md5").update(apiKey).digest("hex");
  const secretKey = crypto.randomBytes(99).toString("hex");
  const secretKeyHash = crypto.createHash("md5").update(secretKey).digest("hex");


  await keyStoreRef.doc(apiKeyHash).update({
    secretKeyHash: secretKeyHash,
  });

  res.json({ secretKey });
});
