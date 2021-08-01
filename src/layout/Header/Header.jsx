/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography, IconButton, Toolbar, Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBarStyled,
  ButtonsContainerStyled,
  ButtonStyled,
  linkStyled,
} from "./styles";

const Header = ({ setOpenSidebar }) => {
  const itemAmount = Object.keys(
    useSelector((state) => state.cart.itemAmount)
  ).length;
  const onClickOpenHandler = () => {
    setOpenSidebar(true);
  };
  return (
    <AppBarStyled position="sticky">
      <Toolbar>
        <IconButton>
          <Link to="/books">
            <img
              alt="hryvnia-icon"
              src="https://img.icons8.com/material-outlined/21/ffffff/ukrainian-hryvnia.png"
            />
          </Link>
        </IconButton>
        <Typography>GetBooks</Typography>
        <ButtonsContainerStyled>
          <ButtonStyled>
            <Link css={linkStyled} to="/contacts">
              Contacts
            </Link>
          </ButtonStyled>
          <Badge badgeContent={itemAmount} color="secondary">
            <ButtonStyled>
              <Link css={linkStyled} to="/cart">
                Cart
              </Link>
            </ButtonStyled>
          </Badge>
          <ButtonStyled>
            <Link css={linkStyled} to="/login">
              Login
            </Link>
          </ButtonStyled>
        </ButtonsContainerStyled>
        <IconButton onClick={onClickOpenHandler}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBarStyled>
  );
};

Header.propTypes = { setOpenSidebar: PropTypes.bool.isRequired };

export default Header;
