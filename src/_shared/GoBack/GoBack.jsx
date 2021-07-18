import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const GoBack = () => {
  const history = useHistory();
  const onClickHandler = () => {
    history.goBack();
  };
  return (
    <Button
      style={{
        border: "1px solid black",
      }}
      onClick={onClickHandler}
    >
      <KeyboardBackspaceIcon />
      <span>Back</span>
    </Button>
  );
};

export default GoBack;
