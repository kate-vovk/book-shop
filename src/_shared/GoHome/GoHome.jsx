import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const GoHome = () => {
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

export default GoHome;
