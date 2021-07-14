import React from "react";
import PropTypes from "prop-types";
import { ListItemText, Paper } from "@material-ui/core";
import ItemPriceAndButtons from "./components/ItemPriceAndButtons";
import { CartListItemContainerStyled, ListItemIconStyled } from "../../styles";

const CartItem = ({ id, title, author, description, image, price }) => {
  return (
    <CartListItemContainerStyled id={id} component={Paper}>
      <ListItemIconStyled>
        <img alt={image} src={image} />
      </ListItemIconStyled>
      <ListItemText
        primary={title}
        secondary={
          <div style={{ textAlign: "justify" }}>
            <h4>{author}</h4>
            <p>{description}</p>
          </div>
        }
      />
      <ItemPriceAndButtons id={id} price={price} />
    </CartListItemContainerStyled>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string,
    value: PropTypes.number,
    displayValue: PropTypes.string,
  }).isRequired,
};

export default CartItem;
