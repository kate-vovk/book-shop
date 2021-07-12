import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";

const GoBack = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push("/");
  };
  return (
    <div>
      <Button onClick={onClickHandler}>Return to main page</Button>
    </div>
  );
};

GoBack.propTypes = {};

export default GoBack;
