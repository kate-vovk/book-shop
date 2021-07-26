import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import Spinner from "./components/Spinner/Spinner";
import BookCard from "./components/BookCard/BookCard";
import { CardsContainerStyled } from "./styles";
import NotFound from "../../../NotFound/NotFound";

const Goods = () => {
  const isLoading = useSelector((state) => state.books.isLoading);
  const books = useSelector((state) => state.books.data);
  const currentPage = useSelector((state) => state.books.page);
  const limit = useSelector((state) => state.books.limit);
  const notFound = useSelector((state) => state.books.notFound);

  const getSearchedData = createSelector(
    (state) => state.books.searchedData,
    (searchedBooks) =>
      searchedBooks.filter(
        (_, index) =>
          index >= (currentPage - 1) * limit && index < currentPage * limit
      )
  );
  const searchedData = useSelector(getSearchedData);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      {notFound ? (
        <NotFound />
      ) : (
        <CardsContainerStyled>
          {searchedData.length
            ? searchedData.map((book) => <BookCard key={book.id} book={book} />)
            : books.map((book) => <BookCard key={book.id} book={book} />)}
          <i area-hidden="true" style={{ width: "300px" }} />
          <i area-hidden="true" style={{ width: "300px" }} />
          <i area-hidden="true" style={{ width: "300px" }} />
          <i area-hidden="true" style={{ width: "300px" }} />
          <i area-hidden="true" style={{ width: "300px" }} />
          <i area-hidden="true" style={{ width: "300px" }} />
        </CardsContainerStyled>
      )}
    </div>
  );
};

export default Goods;
