import React from "react";
import PropTypes from "prop-types";
import { Typography, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { DialogTitleStyled, CloseButtonButtonStyled } from "./styles";

const ModalHeader = ({ onClose }) => {
  return (
    <DialogTitleStyled disableTypography>
      <Typography variant="h6" style={{ margin: "auto" }}>
        Checkout Form
      </Typography>
      <CloseButtonButtonStyled aria-label="close" onClick={onClose}>
        <CloseIcon />
      </CloseButtonButtonStyled>
    </DialogTitleStyled>
  );
};

ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
