import { styled as materialStyled } from "@material-ui/core/styles";
import styled from "@emotion/styled";

import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";

export const CardStyled = materialStyled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 350,
  minHeight: 650,
  margin: "auto",
  alignSelf: "stretch",
}));
