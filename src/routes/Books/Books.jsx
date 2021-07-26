import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/booksSlice";
import Goods from "./components/Goods/Goods";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import SlickSlider from "./components/SlickSlider/SlickSlider";

const Books = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.books.page);
  const limit = useSelector((state) => state.books.limit);

  React.useEffect(() => {
    dispatch(getBooks({ page, limit }));
  }, [page]);
  return (
    <div>
      <SlickSlider />
      <Search />
      <Goods />
      <Pagination />
    </div>
  );
};

export default Books;
