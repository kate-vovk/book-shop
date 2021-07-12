import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Button, List } from "@material-ui/core";
import { useHistory } from "react-router";
import CartItem from "./CartItem";
import CartIsEmpty from "./CartIsEmpty";
import { sendData } from "../../redux/cartSlice";

const Cart = () => {
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.cart);
  const cartItemAmount = useSelector((state) => state.cart.itemAmount);
  const checkout = useSelector((state) => state.cart.checkout);

  const dispatch = useDispatch();
  const onCheckoutHandler = () => {
    dispatch(sendData(cartItemAmount));
  };
  if (checkout) {
    history.push("/");
  }
  return (
    <div>
      {cartItems.length !== 0 ? (
        <List>
          {cartItems.map((item) => (
            <CartItem {...item} />
          ))}
          <Button onClick={onCheckoutHandler}>Checkout</Button>
        </List>
      ) : (
        <CartIsEmpty />
      )}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
