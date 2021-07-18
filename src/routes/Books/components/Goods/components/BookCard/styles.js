/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/react";
import { styled as materialStyled } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";

export const CardStyled = materialStyled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "300px",
  height: "400px",
}));

export const CardMediaStyled = materialStyled(CardMedia)(() => ({
  width: "150px",
  height: "200px",
  margin: "auto",
}));

export const CardWidth = css`
  @media screen and (max-width: 300px) {
    width: 200px;
    height: 450px;
  }
`;
