import { Button } from "@material-ui/core";
import { styled as materialStyled } from "@material-ui/styles";
import styled from "@emotion/styled";

export const ButtonStyled = materialStyled(Button)(({ isMaxPage }) => ({
  display: isMaxPage ? "none" : null,
}));

export const ContainerStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "5px",
});
