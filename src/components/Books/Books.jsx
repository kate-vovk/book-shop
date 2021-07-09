import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/booksSlice";
import Goods from "../Goods/Goods";
import SlickSlider from "../SlickSlider/SlickSlider";

const Books = (props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div>
      <SlickSlider />
      <Goods />
    </div>
  );
};

Books.propTypes = {};

export default Books;
