import styled from "@emotion/styled";
import { styled as materialStyled } from "@material-ui/styles";
import { Paper } from "@material-ui/core";

export const ContainerStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  margin: "20px",
});

export const BackButtonContainerStyled = styled.div({
  display: "flex",
  alignItems: "start",
  justifyContent: "start",
  width: "100px",
  height: "50px",
});

export const ContentContainerStyled = materialStyled(Paper)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  "@media (min-width:800px)": {
    justifyContent: "space-around ",
  },
  "@media (max-width:480px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const ImageContainerStyled = styled.div({
  height: "300px",
});

export const ImageStyled = styled.img({
  width: "200px",
  height: "100%",
});

export const TextContainerStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "60%",
  justifyContent: "space-between",
  margin: "5px",
});
