import React from "react";
import { CircularProgress } from "@material-ui/core";
import { SpinnerContainertStyled } from "./styles";

const Spinner = () => {
  return (
    <SpinnerContainertStyled>
      <CircularProgress />
    </SpinnerContainertStyled>
  );
};
export default Spinner;
