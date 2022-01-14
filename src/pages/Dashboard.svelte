<script>
  import Account from "./Account.svelte";
  import Services from "./Services.svelte";
  import { Link, Route, Router } from "svelte-navigator";
import Service from "./Service.svelte";

  $: active = "services";
</script>

<div class="relative w-screen h-screen flex flex-row min-h-full text-stone-700">
  <div
    class="w-72 p-4 border-r border-stone-300 font-sans flex flex-col justify-between">
    <div class="flex flex-row items-center justify-start p-2">
      <img src="./favicon-32x32.png" class="mr-2 w-6 h-6" alt="site icon" />
      <div class="text-lg font-sans font-bold">6buns</div>
    </div>
    <div class="flex flex-col flex-grow justify-start px-2 py-6 space-y-2">
      <div
        class="w-full flex flex-row items-center justify-start px-4 py-2 rounded-md border border-transparent hover:border-green-300"
        class:selected={active === "services"}
        on:click={() => (active = "services")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <Link to="/">Services</Link>
      </div>
      <div
        class="w-full flex flex-row items-center justify-start border border-transparent hover:border-green-300 px-4 py-2 rounded-md"
        class:selected={active === "account"}
        on:click={() => (active = "account")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
        <Link to="account">Account</Link>
      </div>
    </div>
    <div
      class="w-full flex flex-row items-center justify-start border border-transparent hover:border-green-300 px-4 py-2 my-4 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="mr-2 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
      <Link to="#">Logout</Link>
    </div>
  </div>
  <Router>
    <main class="w-full h-full p-8 bg-green-50">
      <Route path="account" component={Account} />
      <Route path="/" component={Services} />
      <Route path="/:id" let:params>
        <Service id={params.id} />
      </Route>
    </main>
  </Router>
</div>
