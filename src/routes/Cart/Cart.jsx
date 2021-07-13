import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, List } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createSelector } from "reselect";
import { sendData, toggleCheckout } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import CartIsEmpty from "./CartIsEmpty";

const Cart = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.data);
  const history = useHistory();

  const getcartItems = createSelector(
    (state) => state.cart.id,
    (cartItems) =>
      cartItems.map((id) => {
        return books.find((item) => {
          return item.id === id;
        });
      })
  );
  const cartItems = useSelector(getcartItems);
  const cartItemAmount = useSelector((state) => state.cart.itemAmount);
  const checkout = useSelector((state) => state.cart.checkout);

  const onCheckoutHandler = () => {
    dispatch(sendData(cartItemAmount));
  };
  if (checkout) {
    dispatch(toggleCheckout());
    history.push("/");
  }
  return (
    <div>
      {cartItems.length !== 0 ? (
        <List>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <Button onClick={onCheckoutHandler}>Checkout</Button>
        </List>
      ) : (
        <CartIsEmpty />
      )}
    </div>
  );
};
export default Cart;
