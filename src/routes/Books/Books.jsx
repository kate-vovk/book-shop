import React from "react";
import { useDispatch } from "react-redux";
import { getBooks } from "../../redux/booksSlice";
import Goods from "./components/Goods/Goods";
import SlickSlider from "./components/SlickSlider/SlickSlider";

const Books = () => {
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

export default Books;
