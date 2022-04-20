<script>
import { Route, Router } from "svelte-navigator";
import PrivateRoute from "./Components/PrivateRoute.svelte";
import Dashboard from "./pages/Dashboard.svelte";
// import Products from "./pages/Products.svelte";
// import Pricing from "./pages/Pricing.svelte";
// import FAQ from "./pages/FAQ.svelte";
import Docs from "./pages/Docs.svelte";
import Demo from "./pages/Demo.svelte";
</script>

<Router>
  <div>
    <!-- <Route path="/pricing">
      <Pricing />
    </Route> -->
    <!-- <Route path="/products">
      <Products />
    </Route> -->
    <Route path="/docs/*">
      <Docs />
    </Route>
    <Route path="/demo">
      <Demo />
    </Route>
    <PrivateRoute path="/*" let:location>
      <Dashboard />
    </PrivateRoute>
  </div>
</Router>
