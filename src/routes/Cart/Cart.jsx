import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createSelector } from "reselect";
import { toggleCheckout } from "../../redux/cartSlice";
import CartItem from "./components/CartItem/CartItem";
import CartIsEmpty from "./components/CartIsEmpty";
import { getBooksApi } from "../../api/books";

const Cart = () => {
  const [items, setItems] = React.useState([]);

  const dispatch = useDispatch();
  const history = useHistory();
  const getIds = createSelector(
    (state) => state.cart.itemAmount,
    (elements) => Object.keys(elements).map((id) => Number(id))
  );
  const cart = useSelector(getIds);
  const checkout = useSelector((state) => state.cart.checkout);

  React.useEffect(() => {
    getBooksApi().then((books) => {
      setItems(books);
    });
  }, []);

  if (checkout) {
    dispatch(toggleCheckout());
    history.push("/");
  }

  const onCheckoutHandler = () => {
    history.push("/cart/checkout");
  };

  return (
    <div>
      {cart.length !== 0 ? (
        <List>
          {cart.map((id) =>
            items
              .filter((el) => el.id === id)
              .map((item) => <CartItem key={item.id} {...item} />)
          )}
          <Button onClick={onCheckoutHandler}>Checkout</Button>
        </List>
      ) : (
        <CartIsEmpty />
      )}
    </div>
  );
};
export default Cart;
