import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createSelector } from "reselect";
import { toggleCheckout } from "../../redux/cartSlice";
import CartItem from "./components/CartItem/CartItem";
import CartIsEmpty from "./components/CartIsEmpty";

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
  const checkout = useSelector((state) => state.cart.checkout);

  if (checkout) {
    dispatch(toggleCheckout());
    history.push("/");
  }

  const onCheckoutHandler = () => {
    history.push("/cart/checkout");
  };

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
