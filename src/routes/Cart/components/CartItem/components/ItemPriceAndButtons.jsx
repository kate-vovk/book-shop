import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import EuroIcon from "@material-ui/icons/Euro";
import {
  decrement,
  increment,
  removeFromCart,
} from "../../../../../redux/cartSlice";
import {
  ItemPriceAndButtonsContainerStyled,
  AlignCenterContainerStyled,
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
    <ItemPriceAndButtonsContainerStyled elevation={0}>
      <AlignCenterContainerStyled>
        <h2>{price.value * amountOfItem[id]}</h2>
        <EuroIcon />
      </AlignCenterContainerStyled>
      <AlignCenterContainerStyled>
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
      </AlignCenterContainerStyled>

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
