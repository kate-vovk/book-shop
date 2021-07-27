import React from "react";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

const NotFound = () => {
  function onClickHandler() {}
  return (
    <div>
      <h2>Sorry, can&apos;t find this book</h2>
      <Button onClick={onClickHandler}>Refresh</Button>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
