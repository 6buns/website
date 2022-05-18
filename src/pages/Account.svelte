<script>
import { onDestroy, onMount } from "svelte";

import { writable } from "svelte/store";
import { interpret } from "xstate";

import { initAuth } from "../auth";
import { updateAccountMachine } from "../auth/updateAccountMachine";

const { state, send } = initAuth;

const service = interpret(updateAccountMachine).onTransition((state) => console.log(state.context));

onMount(() => {
  service.start();
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
</script>

<div class="w-full h-full bg-white rounded-2xl shadow-md flex flex-col items-center justify-start overflow-scroll px-16 py-8 space-y-8">
  <div class="w-fit flex flex-col items-start justify-evenly space-y-2">
    <h1 class="text-stone-700/40 text-4xl font-bold capitalize">account details</h1>
    <div class="w-full flex flex-col space-y-2">
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
  <div class="w-fit flex flex-col items-start justify-evenly space-y-2">
    <h1 class="text-stone-700/40 text-4xl font-bold capitalize">contact details</h1>
    <div class="w-full flex flex-col space-y-2">
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
  <div class="w-fit flex flex-col items-start justify-evenly space-y-2">
    <h1 class="text-stone-700/40 text-4xl font-bold capitalize">API details</h1>
    <div class="w-full grid grid-rows-2 items-center justify-start">
      <h4 class="capitalize font-bold">client ID</h4>
      <input class="w-[640px] px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" on:change="{handleChange}" name="apiKey" value="{data?.apiKey}" placeholder="your api key" readonly />
    </div>
  </div>
  {#if $somethingChanged}
    <button class="bg-red-500 text-white font-semibold px-5 py-2 text-center rounded-md shadow-md hover:shadow-2xl absolute w-32 bottom-20 right-20" on:click="{saveData}"> Save </button>
  {/if}
</div>
