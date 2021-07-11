import React from "react";
import PropTypes from "prop-types";
import GoHome from "../GoHome/GoHome";

const CartIsEmpty = () => {
  return (
    <div>
      <h2>Cart is empty</h2>
      <GoHome />
    </div>
  );
};

CartIsEmpty.propTypes = {};

export default CartIsEmpty;
