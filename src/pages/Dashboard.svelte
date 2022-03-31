<script>
import Account from "./Account.svelte";
import { Link, Route, Router } from "svelte-navigator";
import Service from "./Service.svelte";
import CreateSubscritionSuccess from "./CreateSubscritionSuccess.svelte";
import CreateSubscriptionCancel from "./CreateSubscriptionCancel.svelte";
import { initAuth } from "../auth";
$: active = "dashboard";

const { state, send } = initAuth;
</script>

<Router>
  <div
    class="relative w-screen h-screen flex flex-row min-h-full text-stone-700">
    <div class="w-80 px-4 py-8 font-sans flex flex-col justify-between">
      <div class="flex flex-row items-center justify-start px-2 py-2">
        <div class="w-full flex flex-row items-center justify-start px-4 cursor-pointer">
          <img
            src="./android-chrome-192x192.png"
            class="mr-2 w-8 h-8"
            alt="site icon" />
        </div>
      </div>
      <div class="flex flex-col flex-grow justify-start px-2 py-6 space-y-4">
        <div class="flex flex-col space-y-2 py-2">
          <div
            class="w-full flex flex-row items-center font-bold justify-start px-4 rounded-md">
            Scalable Peer
          </div>
          <Link to="/">
            <div
              class="w-fill flex flex-row items-center justify-start mx-6 mr-0 px-2 py-1 rounded-md hover:bg-green-100"
              class:selected="{active === 'dashboard'}"
              on:click="{() => (active = 'dashboard')}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"></path>
              </svg>
              Subscription
            </div>
          </Link>
          <Link to="/rooms">
            <div
              class="w-fill flex flex-row items-center justify-start mx-6 mr-0 px-2 py-1 rounded-md hover:bg-green-100"
              class:selected="{active === 'all'}"
              on:click="{() => (active = 'all')}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd"></path>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
              </svg>
              Rooms
            </div>
          </Link>
        </div>
        <Link to="account">
          <div
            class="w-full flex flex-row items-center font-bold justify-start px-4 py-2 rounded-md hover:bg-green-100"
            class:selected="{active === 'account'}"
            on:click="{() => (active = 'account')}">
            Account
          </div>
        </Link>
        <form
          action="https://us-central1-vide-336112.cloudfunctions.net/createPortalSession"
          class="col-span-2 w-full flex items-center justify-center"
          method="POST">
          <input
            type="hidden"
            id="customerId"
            name="customerId"
            bind:value="{$state.context.user.customerId}" />
          <button
            class="w-full flex flex-row items-center font-bold justify-start px-4 py-2 rounded-md hover:bg-green-100"
            class:selected="{active === 'payments'}"
            on:click="{() => (active = 'payments')}"
            id="checkout-and-portal-button"
            type="submit">Payments</button>
        </form>
        <Link to="docs">
          <div
            class="w-full flex flex-row items-center font-bold justify-start px-4 py-2 rounded-md hover:bg-green-100"
            class:selected="{active === 'docs'}"
            on:click="{() => (active = 'docs')}">
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg> -->
            Documentation
            <div class="flex flex-grow justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                ></path>
                <path
                  d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                ></path>
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <div class="flex flex-col flex-grow-0 justify-start px-2 py-2">
        <div
          on:click="{() => send({ type: 'LOGOUT' })}"
          class="w-full flex flex-row items-center justify-start px-4 py-2 font-bold rounded-md hover:bg-green-100 cursor-pointer">
          Logout
          <div class="flex flex-grow justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <main class="w-full h-full p-8 bg-green-100">
      <Route path="/" component="{Service}" />
      <Route path="/account" component="{Account}" />
      <Route path="/subscription/success/:id" let:params>
        <CreateSubscritionSuccess session_id="{params.id}" />
      </Route>
      <Route
        path="/subscription/cancel"
        component="{CreateSubscriptionCancel}" />
    </main>
  </div>
</Router>
