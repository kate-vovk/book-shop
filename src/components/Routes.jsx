import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
