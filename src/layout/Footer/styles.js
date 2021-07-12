/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/react";
import { ListItem, List } from "@material-ui/core";
import { styled as materialStyled } from "@material-ui/styles";
import styled from "@emotion/styled";

export const ListStyled = styled.div`
  display: flex;
  background-color: white;
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
