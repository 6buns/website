<script>
import { Route, Router } from "svelte-navigator";
import PrivateRoute from "./Components/PrivateRoute.svelte";
import Dashboard from "./pages/Dashboard.svelte";
import Docs from "./pages/Docs.svelte";
import Demo from "./pages/Demo.svelte";
import Login from "./Components/Login.svelte";
</script>

<Router>
  <div>
    <Login />
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
