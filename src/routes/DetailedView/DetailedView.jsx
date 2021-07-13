import React from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../_shared/GoBack/GoBack";

const DetailedView = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Detailed View {id}</p>
      <GoBack />
    </div>
  );
};

export default DetailedView;
