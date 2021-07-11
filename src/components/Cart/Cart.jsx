import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Button, List } from "@material-ui/core";
import CartItem from "./CartItem";
import CartIsEmpty from "./CartIsEmpty";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <div>
      {cartItems.length !== 0 ? (
        <List>
          {cartItems.map((item) => (
            <CartItem {...item} />
          ))}
          <Button>Checkout</Button>
        </List>
      ) : (
        <CartIsEmpty />
      )}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
