<script>
import { Route } from "svelte-navigator";
import Home from "../pages/Home.svelte";
import { initAuth } from "../auth";
import Loading from "./Loading.svelte";

const { state, send } = initAuth;
export let path;
</script>

<Route path="{path}" let:params let:location let:navigate>
  {#if ["authenticating", "loading", "signingIn", "signingOut"].some($state.matches)}
    <Loading />
  {/if}

  {#if $state.matches("signedIn")}
    <slot params="{params}" location="{location}" navigate="{navigate}" />
  {/if}

  {#if $state.matches("signedOut")}
    <Home />
  {/if}
</Route>
