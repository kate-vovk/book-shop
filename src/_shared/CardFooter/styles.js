import styled from "@emotion/styled";
import { styled as materialStyled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const FooterStyled = styled.div({
  display: "flex",
  direction: "row",
  justifyContent: "space-between",
});

export const CartButtonStyled = materialStyled(Button)(({ isAddedToCart }) => ({
  backgroundColor: isAddedToCart ? "lightBlue" : null,
}));

export const FavoritesButtonStyled = materialStyled(Button)(
  ({ isAddedToFavorites }) => ({
    backgroundColor: isAddedToFavorites ? "lightBlue" : null,
    color: isAddedToFavorites ? "yellow" : null,
  })
);
