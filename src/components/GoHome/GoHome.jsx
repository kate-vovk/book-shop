import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";

const GoHome = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push("/");
  };
  return (
    <div>
      <Button onClick={onClickHandler}>Go Home</Button>
    </div>
  );
};

GoHome.propTypes = {};

export default GoHome;
