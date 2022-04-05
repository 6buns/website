<script>
import { initAuth } from "../auth";

const { state, send } = initAuth;
let data = $state.context.user;
</script>

<div
  class="w-full bg-white rounded-2xl shadow-md flex flex-col items-center justify-start">
  <div
    class="w-full flex flex-col items-start justify-evenly px-8 py-4 space-y-2">
    <h1 class="font-bold text-4xl capitalize">contact details</h1>
    <div class="w-full flex flex-row flex-wrap space-y-2 border-t">
      <div
        class="w-full grid grid-cols-2 px-4 items-center justify-start text-2xl">
        <h4 class="text-xl capitalize text-stone-500">name</h4>
        <h4
          class="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-lg"
          on:click="{() => console.log('change name')}">
          {data.name}
        </h4>
      </div>
      <div
        class="w-full grid grid-cols-2 px-4 items-center justify-start text-2xl">
        <h4 class="text-xl capitalize text-stone-500">email</h4>
        <h4
          class="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-lg"
          on:click="{() => console.log('change email id')}">
          {data.email}
        </h4>
      </div>
      <div
        class="w-full grid grid-cols-2 px-4 items-center justify-start text-2xl">
        <h4 class="text-xl capitalize text-stone-500">phone</h4>
        <h4
          class="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-lg"
          on:click="{() => console.log('change email id')}">
          {data.phone}
        </h4>
      </div>
    </div>
  </div>
  <div
    class="w-full flex flex-col items-start justify-evenly px-8 py-4 space-y-2">
    <h1 class="font-bold text-4xl capitalize">API details</h1>
    <div
      class="w-full grid grid-cols-2 px-4 items-center justify-start text-2xl">
      <h4 class="text-xl capitalize text-stone-500">client ID</h4>
      <h4
        class="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-lg"
        on:click="{() => console.log('change client id')}">
        {data?.apiKey}
      </h4>
    </div>
  </div>
</div>
