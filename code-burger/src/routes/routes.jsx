import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Login, Register, Home, Products, Cart, Admin } from "../page";
import paths from "../constants/paths";
import PrivateRoute from "./private-route";

function conexãoEntrePages() {
  return (
    <Router>
      <Switch>
          <Route component={Login} path={paths.Login} />
          <Route component={Register} path={paths.Register} />
          <PrivateRoute exact component={Home} path={paths.Home} />
          <PrivateRoute component={Products} path={paths.Products} />
          <PrivateRoute component={Cart} path={paths.Cart} />   
          <PrivateRoute component={Admin} path={paths.Order} isAdmin /> 
          <PrivateRoute component={Admin} path={paths.ProductsEdit} isAdmin /> 
      </Switch>
    </Router>
  );
}

export default conexãoEntrePages;