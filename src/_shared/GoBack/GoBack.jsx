import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const GoBack = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.goBack();
  };
  return (
    <div>
      <Button onClick={onClickHandler}>Return to the previous page</Button>
    </div>
  );
};

GoBack.propTypes = {};

export default GoBack;
