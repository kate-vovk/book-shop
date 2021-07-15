import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { toggleCheckout } from "../../redux/cartSlice";
import CartItem from "./components/CartItem/CartItem";
import CartIsEmpty from "./components/CartIsEmpty";
import { getBooksApi } from "../../api/books";

const Cart = () => {
  const [items, setItems] = React.useState([]);

  const dispatch = useDispatch();
  const history = useHistory();
  const cartIds = useSelector((state) => state.cart.id);
  const checkout = useSelector((state) => state.cart.checkout);

  React.useEffect(() => {
    getBooksApi().then((data) => {
      const books = cartIds.map((id) =>
        data.find((item) => {
          return item.id === id;
        })
      );
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
      {cartIds.length !== 0 ? (
        <List>
          {items.map((item) => {
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
