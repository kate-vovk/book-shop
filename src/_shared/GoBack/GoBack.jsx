import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const GoBack = () => {
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

export default GoBack;
