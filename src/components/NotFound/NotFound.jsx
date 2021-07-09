import React from "react";
import PropTypes from "prop-types";
import GoHome from "../GoHome/GoHome";

const NotFound = (props) => {
  return (
    <div>
      <h2>Sorry, can&apos;t find this page</h2>
      <GoHome />
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
