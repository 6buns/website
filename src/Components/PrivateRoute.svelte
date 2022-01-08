<script>
  import { user } from "../store";
  import { Route } from "svelte-navigator";
  import Home from "../pages/Home.svelte";

  export let path;
</script>

<Route {path} let:params let:location let:navigate>
  {#if $user.uid}
    <slot {params} {location} {navigate} />
  {:else}
    <Home />
  {/if}
</Route>
