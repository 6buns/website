<script>
  import { Route, Router } from "svelte-navigator";
  import PrivateRoute from "./Components/PrivateRoute.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Profile from "./pages/Profile.svelte";
  import Products from "./pages/Products.svelte";
  import Pricing from "./pages/Pricing.svelte";
  import FAQ from "./pages/FAQ.svelte";
import Docs from "./pages/Docs.svelte";
</script>

<Router>
  <div>
    <Route path="/pricing">
      <Pricing />
    </Route>
    <Route path="/products">
      <Products />
    </Route>
    <Route path="/docs/*">
      <Docs />
    </Route>
    <Route path="/faq">
      <FAQ />
    </Route>
    <PrivateRoute path="/*" let:location>
      <Dashboard />
    </PrivateRoute>
    <PrivateRoute path="/profile" let:location>
      <Profile />
    </PrivateRoute>
  </div>
</Router>
