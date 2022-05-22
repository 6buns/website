<script>
import { onDestroy, onMount } from "svelte";

import { writable } from "svelte/store";
import { interpret } from "xstate";

import { initAuth } from "../auth";
import { updateAccountMachine } from "../auth/updateAccountMachine";

const { state, send } = initAuth;
$: secretKey = writable("");

const service = interpret(updateAccountMachine).onTransition((state) => console.log(state.context));

onMount(() => {
  service.start();
  secretKey.set(new Array(99).fill("*").join(""));
});

onDestroy(() => {
  service.stop();
});

let data = { ...$state.context.user },
  updatedData = { ...data };
$: somethingChanged = writable(false);

const handleChange = (e) => {
  updatedData = {
    ...updatedData,
    [e.target.name]: e.target.value,
  };
  somethingChanged.set(hasSomethingChanged(data, updatedData));
};

const hasSomethingChanged = (data, updatedData) => {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if (data[key] !== updatedData[key]) return true;
    }
  }

  return false;
};

const saveData = () => {
  let obj = {};
  // find out the keys to update,
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if (data[key] !== updatedData[key]) {
        obj[key] = updatedData[key];
      }
    }
  }
  service.send("NEXT", { uid: data.uid, data: { ...obj } });
  return { ...obj };
};

const generateSecret = () => {
  fetch("http://localhost:5001/vide-336112/us-central1/generateNewSecret", {
    method: "POST",
    body: JSON.stringify({
      apiKey: data?.apiKey,
    }),
  })
    .then((res) => res.json())
    .then((value) => secretKey.set(value.secretKey))
    .catch(console.error);
};
</script>

<div class="w-full h-full bg-white rounded-2xl shadow-md flex flex-col items-center justify-start overflow-scroll px-48 py-24 space-y-16">
  <div class="w-fit flex flex-col items-start justify-evenly space-y-8">
    <h1 class="text-stone-700/40 text-4xl font-bold capitalize">API details</h1>
    <div class="w-full flex flex-col space-y-4">
      <div class="w-full flex flex-col items-start justify-start space-y-4">
        <h4 class="flex flex-col items-start">
          <span class="capitalize font-bold">Publishable Key</span>
          <span class="font-normal text-xs text-stone-500">Can be publicly-accessible in your web or mobile app’s client-side code.</span>
        </h4>
        <textarea
          class="w-[640px] h-fit px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg"
          on:click="{(e) => {
            e.preventDefault();
            navigator.clipboard
              .writeText(`${data?.apiKey}`)
              .then(() => alert('API Key copied to Clipboard.'))
              .catch(() => alert('Unable to copy, provide permissions.'));
          }}"
          name="apiKey"
          value="{data?.apiKey}"
          placeholder="your api key"
          rows="3"
          readonly></textarea>
      </div>
      <div class="w-full flex flex-col items-start justify-start space-y-4">
        <h4 class="flex flex-col items-start">
          <span class="capitalize w-full font-bold ">Secret Key</span>
          <span class="w-fit font-normal text-xs text-stone-500">
            Must be secret and stored securely in your web or mobile app’s server-side code (such as in an environment variable or credential management system). After you generate it, store it, before it disappears (when you refresh your
            page).
          </span>
        </h4>
        <textarea
          class="w-[640px] h-fit px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg"
          on:click="{(e) => {
            e.preventDefault();
            navigator.clipboard
              .writeText(`${$secretKey}`)
              .then(() => alert('Secret Key copied to Clipboard.'))
              .catch(() => alert('Unable to copy, provide permissions.'));
          }}"
          name="secretKey"
          value="{$secretKey}"
          placeholder="your secret key"
          rows="3"
          readonly></textarea>
        <button class="bg-stone-50 font-semibold border border-stone-300 hover:border-stone-400 px-2 py-1 text-center rounded-lg" on:click="{generateSecret}"> Generate Secret </button>
      </div>
    </div>
  </div>

  <div class="w-fit flex flex-col items-start justify-evenly space-y-8">
    <h1 class="text-stone-700/40 text-4xl font-bold capitalize">account details</h1>
    <div class="w-full flex flex-col space-y-4">
      <div class="w-full grid grid-rows-2 items-center justify-start">
        <h4 class="capitalize font-bold">customer id</h4>
        <input class="w-[640px] px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" name="customerId" value="{data.customerId}" readonly />
      </div>
      <div class="w-full grid grid-rows-2 items-center justify-start">
        <h4 class="capitalize font-bold">subscription</h4>
        <input class="w-[640px] px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" name="hasSubcription" value="{data.hasSubcription}" readonly />
      </div>
      <div class="w-full grid grid-rows-2 items-center justify-start">
        <h4 class="capitalize font-bold">user id</h4>
        <input class="w-[640px] px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" name="userId" value="{data.userId}" readonly />
      </div>
      <div class="w-full grid grid-rows-2 items-center justify-start">
        <h4 class="capitalize font-bold">last payment at</h4>
        <input class="w-[640px] px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" name="lastPaymentAt" value="{data.lastPaymentAt}" readonly />
      </div>
    </div>
  </div>

  <div class="w-fit flex flex-col items-start justify-evenly space-y-8">
    <h1 class="text-stone-700/40 text-4xl font-bold capitalize">contact details</h1>
    <div class="w-full flex flex-col space-y-4">
      <div class="w-full grid grid-rows-2 items-center justify-start">
        <h4 class="capitalize font-bold">name</h4>
        <input class="w-[640px] px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" on:change="{handleChange}" name="displayName" value="{data.displayName}" placeholder="your name" />
      </div>
      <div class="w-full grid grid-rows-2 items-center justify-start">
        <h4 class="capitalize font-bold">email</h4>
        <input class="w-[640px] px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" on:change="{handleChange}" name="email" value="{data.email}" placeholder="your email id" />
      </div>
      <div class="w-full grid grid-rows-2 items-center justify-start">
        <h4 class="capitalize font-bold">phone</h4>
        <input class="w-[640px] px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" on:change="{handleChange}" name="phone" value="{data.phone}" placeholder="your phone no." />
      </div>
    </div>
  </div>

  {#if $somethingChanged}
    <button class="bg-red-500 text-white font-semibold px-5 py-2 text-center rounded-md shadow-md hover:shadow-2xl absolute w-32 bottom-20 right-20" on:click="{saveData}"> Save </button>
  {/if}
</div>
