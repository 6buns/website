<script>
import { user } from "../store";
import { Route } from "svelte-navigator";
import Home from "../pages/Home.svelte";
import { initAuth } from "../auth";

const { state, send } = initAuth();
export let path;
</script>

<Route path="{path}" let:params let:location let:navigate>
  {#if $state.matches("authenticating") || $state.matches("loading")}
    <h1>authenticating</h1>
  {/if}

  {#if $state.matches("signedIn")}
    <slot params="{params}" location="{location}" navigate="{navigate}" />
  {/if}

  {#if $state.matches("signedOut")}
    <Home />
  {/if}
</Route>
