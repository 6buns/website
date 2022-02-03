<script>
  import { user } from "../store";
  import { login, logout } from "../../firebase";
  import { onMount } from "svelte";
  let open = false;
  const setOpen = () => (open = !open);

  onMount(() => console.log("Menu Mounted"));
</script>

<nav class="w-full py-2 px-4 xl:px-16">
  <div class="flex flex-row items-center justify-between md:justify-start">
    <a
      href="/"
      class="flex-grow-0 flex flex-row items-center justify-center space-x-4 px-4 py-2">
      <img src="/favicon-32x32.png" class="w-8 h-8" alt="site icon" />
      <span class="text-3xl font-semibold font-serif">6buns</span>
    </a>
    <div
      class="md:w-full md:flex flex-row flex-grow justify-end items-center space-x-4 hidden text-md font-semibold">
      <ul class=" flex flex-row items-center justify-evenly capitalize">
        {#if $user.uid}
          <li class="btn btn-plain">
            <a href="/"> Dashboard </a>
          </li>
          <li class="btn btn-plain">
            <a href="/profile"> Profile </a>
          </li>
        {:else}
          <li class="btn btn-plain">
            <a href="/products">products</a>
          </li>
          <li class="btn btn-plain">
            <a href="/pricing">pricing</a>
          </li>
          <li class="btn btn-plain">
            <a href="/faq">FAQ</a>
          </li>
        {/if}
        <li class="btn btn-plain">
          <a href="/docs">Docs</a>
        </li>
      </ul>
      {#if !$user.uid}
        <ul
          class="flex flex-row items-center justify-evenly space-x-6 capitalize cursor-pointer">
          <li class="btn btn-outlined" on:click={login}>login</li>
          <li class="btn btn-green">Signup</li>
        </ul>
      {:else}
        <ul
          class=" flex flex-row items-center justify-evenly space-x-6 capitalize cursor-pointer">
          <li class="btn btn-outlined" on:click={logout}>Logout</li>
        </ul>
      {/if}
    </div>
    <div class="text-stone-500 md:hidden z-30" on:click={setOpen}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d={!open
            ? "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            : "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}
          clipRule="evenodd" />
      </svg>
    </div>
  </div>
  {#if open}
    <div
      class="text-2xl text-stone-200 z-20 p-4 flex flex-col items-center justify-evenly">
      <ul
        class="w-full p-4 flex flex-col items-center justify-evenly space-y-4">
        {#if $user.uid}
          <li class="btn btn-plain">
            <a href="/dashboard"> Dashboard </a>
          </li>
          <li class="btn btn-plain">
            <a href="/profile"> Profile </a>
          </li>
        {:else}
          <li class="btn btn-plain">
            <a href="/products">products</a>
          </li>
          <li class="btn btn-plain">
            <a href="/pricing">pricing</a>
          </li>
        {/if}
        <li class="btn btn-plain">
          <a href="/docs">Docs</a>
        </li>
      </ul>
      {#if !$user.uid}
        <ul
          class="mt-8 w-full p-4 flex flex-row items-center justify-evenly space-x-8">
          <li class="btn btn-outlined" on:click={login}>Login</li>
          <li class="btn btn-green">Signup</li>
        </ul>
      {:else}
        <ul
          class="mt-8 w-full p-4 flex flex-row items-center justify-evenly space-x-8">
          <li class="btn btn-outlined" on:click={logout}>Logout</li>
        </ul>
      {/if}
    </div>
  {/if}
</nav>
