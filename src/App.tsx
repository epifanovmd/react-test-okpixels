import { Route, Switch } from "react-router-dom";
import React from "react";
import { routes } from "./routes";

const App = () => (
  <div>
    <Switch>
      {routes.map((route) => (
        <Route {...route} key={route.path} component={route.component} />
      ))}
    </Switch>
  </div>
);

export default App;
