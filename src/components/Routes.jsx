import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Goods from "./Goods/Goods";
import Cart from "./Cart/Cart";
import Contacts from "./Contacts/Contacts";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import DetailedView from "./DetailedView/DetailedView";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={{ pathname: "/books" }} />
      </Route>
      <Route exact path="/books" component={Goods} />
      <Route path="/books/:id" component={DetailedView} />
      <Route path="/cart" component={Cart} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
