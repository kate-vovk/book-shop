import React from "react";
import PropTypes from "prop-types";
import { Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeFromCart } from "../../redux/cartSlice";
import {
  ItemPriceAndButtonsContainerStyled,
  ItemButtonsContainerStyled,
} from "./styles";

const ItemPriceAndButtons = ({ id, price }) => {
  const dispatch = useDispatch();
  const amountOfItem = useSelector((state) => state.cart.itemAmount);
  const onClickRemoveButtonHandler = () => {
    dispatch(removeFromCart(id));
  };
  const onClickIncrementButtonHandler = () => {
    dispatch(increment(id));
  };
  const onClickDecrementButtonHandler = () => {
    dispatch(decrement(id));
  };
  return (
    <ItemPriceAndButtonsContainerStyled>
      <h2>{price.value}</h2>
      <ItemButtonsContainerStyled>
        <Button
          disabled={amountOfItem[id] >= 10}
          aria-label="addItem"
          onClick={onClickIncrementButtonHandler}
        >
          <AddIcon />
        </Button>
        <h3>{amountOfItem[id]}</h3>
        <Button aria-label="deleteItem" onClick={onClickDecrementButtonHandler}>
          <DeleteIcon />
        </Button>
      </ItemButtonsContainerStyled>

      <Button onClick={onClickRemoveButtonHandler}>Remove</Button>
    </ItemPriceAndButtonsContainerStyled>
  );
};

ItemPriceAndButtons.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string,
    value: PropTypes.number,
    displayValue: PropTypes.string,
  }).isRequired,
};

export default ItemPriceAndButtons;
