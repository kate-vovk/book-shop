import styled from "@emotion/styled";
import { styled as materialStyled } from "@material-ui/styles";
import { ListItem, ListItemIcon } from "@material-ui/core";

export const CartListItemContainerStyled = materialStyled(ListItem)({
  display: "flex",
  height: "200px",
  marginBottom: "10px",
  alignItems: "flex-start",
});

export const ListItemIconStyled = materialStyled(ListItemIcon)({
  width: "120px",
  height: "90%",
  margin: "10px",
});

export const ItemPriceAndButtonsContainerStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
});

export const ItemButtonsContainerStyled = styled.div({
  display: "flex",
  textAlign: "center",
});
