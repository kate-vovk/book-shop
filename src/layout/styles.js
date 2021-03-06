import styled from "@emotion/styled";

export const ContainerStyled = styled.div`
  display: grid;
  grid-template-areas:
    "c"
    "c"
    "f";
`;
export const ContentStyled = styled.div`
  grid-area: c;
  background-color: white;
  @media screen and (min-width: 240px) {
    min-height: calc(100vh - 241px);
  }
  @media screen and (min-width: 320px) {
    min-height: calc(100vh - 195px);
  }
  @media screen and (min-width: 480px) {
    min-height: calc(100vh - 160px);
  }
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 167px);
  } ;
`;
export const FooterStyled = styled.div`
  position: static;
  grid-area: f;
  background-color: white;
`;
