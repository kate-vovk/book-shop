import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./RoutesConfig";

const Routes = () => {
  return (
    <Switch>
      {routes.map((route) => {
        if (route.redirect) {
          return (
            <Route key={route.name} exact={route.exact} path={route.path}>
              <Redirect to={{ pathname: route.to }} />
            </Route>
          );
        }
        return (
          <Route
            key={route.name}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
