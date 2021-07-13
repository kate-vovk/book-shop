import styled from "@emotion/styled";
import { Paper } from "@material-ui/core";
import { styled as materialStyled } from "@material-ui/styles";

export const PrevArrowStyled = styled.div({
  display: "block",
  marginLeft: 50,
  zIndex: "1",
});

export const NextArrowStyled = styled.div({
  display: "block",
  marginRight: 50,
});

export const SliderContainerStyled = materialStyled(Paper)(() => ({
  width: "85vw",
  height: "200px",
  margin: "auto",
  padding: "10px",
  marginTop: "10px",
  marginBottom: "10px",
  backgroundColor: "lightgrey",
}));

export const ImageStyled = styled.img({
  width: "100px",
  height: "150px",
  margin: "auto",
});
