/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import { ListItem } from "@material-ui/core";
import { aStyled, ListStyled, listItemContainerStyled } from "./styles";

const Footer = () => {
  return (
    <div>
      <ListStyled>
        <ListItem css={listItemContainerStyled}>
          <ListItem button component="a" href="#" css={aStyled}>
            Privacy
          </ListItem>
          <ListItem button component="a" href="#" css={aStyled}>
            Terms
          </ListItem>
        </ListItem>

        <div>
          <h3>GetBooks</h3>
          <h6>GetBooks, Inc</h6>
        </div>

        <ListItem css={listItemContainerStyled}>
          <ListItem button component="a" href="#" css={aStyled}>
            Support
          </ListItem>
          <ListItem button component="a" href="#" css={aStyled}>
            Sign Up
          </ListItem>
          <ListItem button component="a" href="#" css={aStyled}>
            Sign In
          </ListItem>
        </ListItem>
      </ListStyled>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
