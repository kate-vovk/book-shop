/* eslint-disable import/no-cycle */
import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setInputValue, setNotFound } from "../../../../redux/searchSlice";

const NotFound = () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(setInputValue(""));
    dispatch(setNotFound(false));
  };
  return (
    <div>
      <h2>Sorry, can&apos;t find this book</h2>
      <Button onClick={onClickHandler}>Refresh</Button>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
