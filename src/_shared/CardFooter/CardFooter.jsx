/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { FooterStyled, CartButtonStyled } from "./styles";
import { toggleAdding } from "../../redux/cartSlice";

const CardFooter = ({ bookId }) => {
  const getIds = createSelector(
    (state) => state.cart.itemAmount,
    (items) => Object.keys(items).map((id) => Number(id))
  );
  const cart = useSelector(getIds);
  const dispatch = useDispatch();
  const onClickAddToCartHandler = () => {
    dispatch(toggleAdding(Number(bookId)));
  };
  return (
    <FooterStyled>
      <IconButton>
        <StarIcon />
      </IconButton>
      <IconButton>
        <ShareIcon />
      </IconButton>
      <CartButtonStyled
        onClick={onClickAddToCartHandler}
        isAddedToCart={Boolean(cart.includes(Number(bookId)))}
      >
        <ShoppingBasketIcon />
      </CartButtonStyled>
    </FooterStyled>
  );
};

CardFooter.propTypes = {
  bookId: PropTypes.number.isRequired,
};

export default CardFooter;
