import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Login, Register, Home, Products, Cart } from "../page";
import PrivateRoute from "./private-route";

function conexãoEntrePages() {
  return (
    <Router>
      <Switch>
        
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          <PrivateRoute exact component={Home} path="/" />
          <PrivateRoute component={Products} path="/products" />
          <PrivateRoute component={Cart} path="/cart" />
        
      </Switch>
    </Router>
  );
}

export default conexãoEntrePages;
