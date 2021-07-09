import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import GoBack from "../GoBack/GoBack";

const DetailedView = (props) => {
  const { id } = useParams();
  return (
    <div>
      <p>Detailed View {id}</p>
      <GoBack />
    </div>
  );
};

DetailedView.propTypes = {};

export default DetailedView;
