import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import PrivateRoute from "./private-route";

function conexãoEntrePages() {
  return (
    <Router>
      <Switch>
        <Route>
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          <PrivateRoute exact component={Home} path="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default conexãoEntrePages;
