import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/booksSlice";
import Goods from "./components/Goods/Goods";
import Pagination from "./components/Pagination/Pagination";
import SlickSlider from "./components/SlickSlider/SlickSlider";

const Books = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.books.page);
  const limit = useSelector((state) => state.books.limit);

  React.useEffect(() => {
    console.log("dispatch books in Books");
    dispatch(getBooks({ page, limit }));
  }, []);
  return (
    <div>
      <SlickSlider />
      <Goods />
      <Pagination />
    </div>
  );
};

export default Books;
