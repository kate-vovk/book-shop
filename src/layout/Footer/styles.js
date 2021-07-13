import styled from "@emotion/styled";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/react";

export const ListStyled = styled.div`
  display: flex;
  background-color: grey;
`;

export const listItemContainerStyled = css`
  width: 30vw;
  margin: auto;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 1px;
    text-align: center;
  }
`;

export const aStyled = css`
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
