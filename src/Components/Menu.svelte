<script>
import { user } from "../store";
// import { login, logout } from "../../firebase";
import { onMount } from "svelte";
import { initAuth } from "../auth";
let open = false;
const setOpen = () => (open = !open);

const { state, send } = initAuth;
</script>

<nav class="w-full py-2 px-8 md:px-16">
  <div class="flex flex-row items-center justify-between md:justify-start">
    <a
      href="/"
      class="flex-grow-0 flex flex-row items-center justify-center space-x-4 py-2">
      <img src="/favicon-32x32.png" class="w-8 h-8" alt="site icon" />
      <span class="text-3xl font-semibold font-serif">6buns</span>
    </a>
    <div
      class="md:w-full md:flex flex-row flex-grow justify-end items-center space-x-4 hidden text-md font-semibold">
      <ul class=" flex flex-row items-center justify-evenly capitalize">
        {#if $state.matches("signedIn")}
          <li class="btn btn-plain">
            <a href="/"> Dashboard </a>
          </li>
          <li class="btn btn-plain">
            <a href="/profile"> Profile </a>
          </li>
        {/if}
        <li class="btn btn-plain">
          <a href="/docs">Docs</a>
        </li>
      </ul>
      {#if $state.matches("signedOut")}
        <ul
          class="flex flex-row items-center justify-evenly space-x-6 capitalize cursor-pointer">
          <li class="btn btn-outlined" on:click="{() => send('LOGIN')}">
            login
          </li>
          <li class="btn btn-green">Signup</li>
        </ul>
      {:else}
        <ul
          class=" flex flex-row items-center justify-evenly space-x-6 capitalize cursor-pointer">
          <li class="btn btn-outlined" on:click="{() => send('LOGOUT')}">
            Logout
          </li>
        </ul>
      {/if}
    </div>
    <div class="text-stone-500 md:hidden z-30" on:click="{setOpen}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="{!open
            ? 'M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            : 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'}"
          clipRule="evenodd"></path>
      </svg>
    </div>
  </div>
  {#if open}
    <div
      class="text-2xl text-stone-200 z-20 p-4 flex flex-col items-center justify-evenly">
      <ul
        class="w-full p-4 flex flex-col items-center justify-evenly space-y-4">
        {#if $state.matches("signedIn")}
          <li class="btn btn-plain">
            <a href="/dashboard"> Dashboard </a>
          </li>
          <li class="btn btn-plain">
            <a href="/profile"> Profile </a>
          </li>
        {/if}
        <li class="btn btn-plain">
          <a href="/docs">Docs</a>
        </li>
      </ul>
      {#if $state.matches("signedOut")}
        <ul
          class="mt-8 w-full p-4 flex flex-row items-center justify-evenly space-x-8">
          <li class="btn btn-outlined" on:click="{() => send('LOGIN')}">
            Login
          </li>
          <li class="btn btn-green">Signup</li>
        </ul>
      {:else}
        <ul
          class="mt-8 w-full p-4 flex flex-row items-center justify-evenly space-x-8">
          <li class="btn btn-outlined" on:click="{() => send('LOGOUT')}">
            Logout
          </li>
        </ul>
      {/if}
    </div>
  {/if}
</nav>
