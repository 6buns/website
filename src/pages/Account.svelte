<script>
import { initAuth } from "../auth";

const { state, send } = initAuth;
let data = { ...$state.context.user },
  updateDated;

const handleChange = (e) => console.log(e.target.name, e.target.value);
</script>

<div class="w-full h-full bg-white rounded-2xl shadow-md flex flex-col items-center justify-start overflow-scroll px-16 py-8 space-y-8">
  <div class="w-full flex flex-col items-start justify-evenly space-y-2">
    <h1 class="text-stone-700/40 text-4xl font-bold capitalize">contact details</h1>
    <div class="w-full flex flex-col space-y-2">
      <div class="w-full grid grid-rows-2 items-center justify-start">
        <h4 class="capitalize font-bold">name</h4>
        <input class="w-full px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" on:change="{handleChange}" name="username" value="{data.name}" placeholder="your name" />
      </div>
      <div class="w-full grid grid-rows-2 items-center justify-start">
        <h4 class="capitalize font-bold">email</h4>
        <input class="w-full px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" on:change="{handleChange}" name="email" value="{data.email}" placeholder="your email id" />
      </div>
      <div class="w-full grid grid-rows-2 items-center justify-start">
        <h4 class="capitalize font-bold">phone</h4>
        <input class="w-full px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" on:change="{handleChange}" name="phone" value="{data.phone}" placeholder="your phone no." />
      </div>
    </div>
  </div>
  <div class="w-full flex flex-col items-start justify-evenly space-y-2">
    <h1 class="text-stone-700/40 text-4xl font-bold capitalize">API details</h1>
    <div class="w-full grid grid-rows-2 items-center justify-start">
      <h4 class="capitalize font-bold">client ID</h4>
      <input class="w-full px-2 py-1 border border-stone-300 hover:border-stone-400 bg-stone-50 cursor-pointer rounded-lg" on:change="{handleChange}" name="apiKey" value="{data?.apiKey}" placeholder="your api key" readonly />
    </div>
  </div>
</div>
