<script>
import { Route, Router } from "svelte-navigator";
import PrivateRoute from "./Components/PrivateRoute.svelte";
import Dashboard from "./pages/Dashboard.svelte";
import Products from "./pages/Products.svelte";
import Pricing from "./pages/Pricing.svelte";
import FAQ from "./pages/FAQ.svelte";
import Docs from "./pages/Docs.svelte";
// import { onMount } from "svelte";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "../firebase";
// import { user } from "./store";
// import { collection, getDocs, query, where } from "firebase/firestore";

// onMount(async () => {
//   onAuthStateChanged(
//     auth,
//     async (u) => {
//       if (u?.uid) {
//         console.log("User Data from Auth.", u);
//         user.update((e) => (e = { ...u }));
//         const userData = await getDocs(
//           query(collection(db, "customers"), where("userId", "==", u.uid))
//         );
//         if (!userData.empty) {
//           const data = userData.docs[0].data();
//           console.log("User Data from firestore.", data);
//           user.update((e) => {
//             e = { ...u, ...data };
//           });
//         } else {
//           user.update((e) => (e = {}));
//         }
//       } else {
//         user.update((e) => (e = {}));
//       }
//     },
//     (e) => {
//       console.error(e);
//     }
//   );
// });

import { initAuth } from "./auth";
import { interpret } from "xstate";

const { state, send } = initAuth();
console.log(state);
</script>

<Router>
  <div>
    <Route path="/pricing">
      <Pricing />
    </Route>
    <Route path="/products">
      <Products />
    </Route>
    <Route path="/docs/*">
      <Docs />
    </Route>
    <Route path="/faq">
      <FAQ />
    </Route>
    <PrivateRoute path="/*" let:location>
      <Dashboard />
    </PrivateRoute>
  </div>
</Router>
