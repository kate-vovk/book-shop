import React from "react";
import { useHistory } from "react-router-dom";

const GoHome = () => {
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
