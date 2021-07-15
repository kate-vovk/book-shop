/* eslint-disable no-useless-computed-key */
import styled from "@emotion/styled";
import { Paper } from "@material-ui/core";
import { styled as materialStyled } from "@material-ui/styles";

export const ItemPriceAndButtonsContainerStyled = materialStyled(Paper)({
  display: "flex",
  width: "20%",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  ["@media (max-width:500px)"]: {
    width: "25%",
  },
  ["@media (max-width:340px)"]: {
    width: "100%",
    flexDirection: "row",
  },
});

export const AlignCenterContainerStyled = styled.div({
  display: "flex",
  alignItems: "center",
});

export const PriceContainerStyled = styled.div({
  display: "flex",
  alignItems: "center",
});
