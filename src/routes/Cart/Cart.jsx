import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, List } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createSelector } from "reselect";
import CartItem from "./CartItem";
import CartIsEmpty from "./CartIsEmpty";
import { sendData } from "../../redux/cartSlice";

const Cart = () => {
  const history = useHistory();
  const books = useSelector((state) => state.books.data);
  const getcartItems = createSelector(
    (state) => state.cart.id,
    (cartItems) =>
      cartItems.map((id) => {
        return books.find((item) => item.id === id);
      })
  );
  const cartItems = useSelector(getcartItems);
  const cartItemAmount = useSelector((state) => state.cart.itemAmount);
  const checkout = useSelector((state) => state.cart.checkout);
  console.log("books", books);
  console.log("cartItemAmount", cartItemAmount);
  console.log("cartItems", cartItems);
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
            <CartItem key={item.id} {...item} />
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
