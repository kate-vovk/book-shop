import { AppBar, Button } from "@material-ui/core";
import { styled as materialStyled } from "@material-ui/styles";
import styled from "@emotion/styled";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/react";

export const AppBarStyled = materialStyled(AppBar)(() => ({
  display: "flex",
  direction: "row",
  margin: "auto",
}));

export const ButtonsContainerStyled = styled.div({
  padding: "15px",
  marginLeft: "auto",
});
export const ButtonStyled = materialStyled(Button)(() => ({
  backgroundColor: "white",
  margin: "5px",
}));

export const linkStyled = css`
  text-decoration: none;
`;
export const formStyle = css`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
`;
