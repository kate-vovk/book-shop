import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

const GoHome = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push("/");
  };
  return (
    <div>
      <button type="button" onClick={onClickHandler}>
        Go Home
      </button>
    </div>
  );
};

GoHome.propTypes = {};

export default GoHome;
