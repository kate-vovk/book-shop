/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ContainerStyled, ContentStyled, FooterStyled } from "./styles";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <ContainerStyled>
        <ContentStyled>{children}</ContentStyled>
        <FooterStyled>
          <Footer />
        </FooterStyled>
      </ContainerStyled>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
