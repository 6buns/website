<script>
  import { user } from "../store";
  import { logout } from "../../firebase";
  import Menu from "../Components/Menu.svelte";

</script>

<div>
  <Menu />
  <main class="mt-24 flex flex-col items-center justify-evenly">
    <h3 class="text-4xl font-bold font-serif ">Hi {$user.displayName}!</h3>

    <img
      src={$user.photoURL}
      class="aspect-square rounded-full my-6 ring-4 ring-stone-800"
      alt="user avatar" />
    <p class="text-lg font-sans my-8">
      Your user id is <span class="underline text-2xl font-bold font-mono"
        >{$user.uid}</span>
    </p>

    <button
      on:click={logout}
      class="px-5 py-2 bg-gray-800 text-green-500 rounded-lg shadow-md uppercase font-sans font-bold"
      >logout</button>
  </main>
</div>
