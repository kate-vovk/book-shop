/* eslint-disable no-useless-computed-key */
import { styled as materialStyled } from "@material-ui/styles";
import { ListItem, ListItemIcon } from "@material-ui/core";
import styled from "@emotion/styled";

export const CartListItemContainerStyled = materialStyled(ListItem)({
  display: "flex",
  "@media (min-width:310px)": {
    marginBottom: "10px",
  },
  ["@media (max-width:340px)"]: {
    flexWrap: "wrap",
    flexDirection: "column-reverse",
  },
});

export const ConstImageTextContainerStyled = styled.div({
  display: "flex",
});

export const ListItemIconStyled = materialStyled(ListItemIcon)(() => ({
  width: "150px",
  height: "180px",
  margin: "5px",
  ["@media (max-width:500px)"]: {
    width: "100px",
    height: "120px",
    margin: "1px",
  },
}));

export const TextContainerStyled = styled.div({
  height: "120px",
  margin: 0,
  textAlign: "justify",
});

export const AuthorContainer = styled.span({
  fontSize: "15px",
  fontWeight: "bold",
});

export const BookDescriptionContainer = styled.span({
  textAlign: "justify",
  ["@media (max-width:500px)"]: {
    visibility: "hidden",
  },
});
