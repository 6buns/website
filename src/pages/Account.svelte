<script>
  import { user } from "../store";
</script>

<div
  class="w-full bg-white rounded-2xl shadow-md flex flex-col items-center justify-start">
  <div
    class="w-full flex flex-col items-start justify-evenly px-8 py-4 space-y-2">
    <h1 class="font-bold text-4xl capitalize">contact details</h1>
    <div
      class="w-full grid grid-cols-2 px-4 items-center justify-start text-2xl">
      <h4 class="text-xl capitalize text-stone-500">name</h4>
      <h4
        class="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-lg"
        on:click={() => console.log("change name")}>
        Aditya Jha
      </h4>
    </div>
    <div
      class="w-full grid grid-cols-2 px-4 items-center justify-start text-2xl">
      <h4 class="text-xl capitalize text-stone-500">email ID</h4>
      <h4
        class="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-lg"
        on:click={() => console.log("change email id")}>
        adtjha@gmail.com
      </h4>
    </div>
    <div
      class="w-full grid grid-cols-2 px-4 items-center justify-start text-2xl">
      <h4 class="text-xl capitalize text-stone-500">phone</h4>
      <h4
        class="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-lg"
        on:click={() => console.log("change email id")}>
        +919156518821
      </h4>
    </div>
    <div
      class="w-full grid grid-cols-2 px-4 items-center justify-start text-2xl">
      <h4 class="text-xl capitalize text-stone-500">password</h4>
      <h4
        class="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-lg"
        on:click={() => console.log("change password")}>
        ••••••••
      </h4>
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
        on:click={() => console.log("change client id")}>
        36fae4dd4ee62434c49b7255911ecfad
      </h4>
    </div>
    <div
      class="w-full grid grid-cols-2 px-4 items-center justify-start text-2xl">
      <h4 class="text-xl capitalize text-stone-500">client secret</h4>
      <h4
        class="px-4 py-2 hover:bg-stone-200 cursor-pointer rounded-lg"
        on:click={() => console.log("change client secret")}>
        ••••••••••••••••••••••••
      </h4>
    </div>
  </div>
</div>
