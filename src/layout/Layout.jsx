import React from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ContainerStyled, ContentStyled, FooterStyled } from "./styles";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header setOpenSidebar={setOpenSidebar} />
      <ContainerStyled>
        <ContentStyled>{children}</ContentStyled>
        <FooterStyled>
          <Footer />
        </FooterStyled>
      </ContainerStyled>
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
    </div>
  );
};

Layout.propTypes = { children: PropTypes.elementType.isRequired };

export default Layout;
