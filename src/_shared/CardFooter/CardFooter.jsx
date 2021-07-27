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
import {
  FooterStyled,
  CartButtonStyled,
  FavoritesButtonStyled,
} from "./styles";
import { toggleAdding } from "../../redux/cartSlice";
import { toggleAddingToFavorites } from "../../redux/favoritesSlice";

const CardFooter = ({ bookId }) => {
  const getCartIds = createSelector(
    (state) => state.cart.itemAmount,
    (items) => Object.keys(items).map((id) => Number(id))
  );
  const cart = useSelector(getCartIds);
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();
  const onClickAddToCartHandler = () => {
    dispatch(toggleAdding(Number(bookId)));
  };
  const onClickAddToFavoritesHandler = () => {
    dispatch(toggleAddingToFavorites(Number(bookId)));
  };
  return (
    <FooterStyled>
      <FavoritesButtonStyled
        onClick={onClickAddToFavoritesHandler}
        isAddedToFavorites={favorites.includes(bookId)}
      >
        <StarIcon styled={{ backgroundColor: "yellow" }} />
      </FavoritesButtonStyled>
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
