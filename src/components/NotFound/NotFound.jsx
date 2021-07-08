import React from "react";
import PropTypes from "prop-types";
import GoBack from "../GoBack/GoBack";

const NotFound = (props) => {
  return (
    <div>
      <h2>Sorry, cant find this page</h2>
      <GoBack />
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
