import { styled as materialStyled } from "@material-ui/core/styles";
import styled from "@emotion/styled";

import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";

export const CardsContainerStyled = materialStyled(Paper)(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "12px",
  alignItems: "flex-start",
}));
