<script>
  import { Route, Router } from "svelte-navigator";
  import PrivateRoute from "./Components/PrivateRoute.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Profile from "./pages/Profile.svelte";
  import Products from "./pages/Products.svelte";
  import Pricing from "./pages/Pricing.svelte";
</script>

<Router>
  <div>
    <Route path="/pricing">
      <Pricing />
    </Route>
    <Route path="/products">
      <Products />
    </Route>
    <PrivateRoute path="/" let:location>
      <Dashboard />
    </PrivateRoute>
    <PrivateRoute path="/profile" let:location>
      <Profile />
    </PrivateRoute>
  </div>
</Router>

<!-- apikey : chS52si83GHxohnS5C53vjEKc0LkjrcraEFmnjR -->
<!-- publickey : tW2ONzka5NXEurlZuwqykPrwJU06SSON96uws9 -->
