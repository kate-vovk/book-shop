/* eslint-disable no-nested-ternary */
import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import PropTypes from "prop-types";
import Spinner from "./components/Spinner/Spinner";
import BookCard from "./components/BookCard/BookCard";
import { CardsContainerStyled } from "./styles";
import NotFound from "../Search/NotFound";
import Favorites from "../Favorites/Favorites";
import SearchData from "../Search/SearchData";

const Goods = ({ showFavorites }) => {
  const currentPage = useSelector((state) => state.pagination.page);
  const limit = useSelector((state) => state.pagination.limit);

  const dataOnPage = (data) =>
    data.filter(
      (_, index) =>
        index >= (currentPage - 1) * limit && index < currentPage * limit
    );

  const getSearchedData = createSelector(
    (state) => state.search.searchedData,
    (searchedBooks) => dataOnPage(searchedBooks)
  );
  const searchedData = useSelector(getSearchedData);
  const books = useSelector((state) => state.books.data);
  const isLoading = useSelector((state) => state.books.isLoading);
  const notFound = useSelector((state) => state.search.notFound);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      {notFound ? (
        <NotFound />
      ) : (
        <CardsContainerStyled>
          {searchedData.length ? (
            <SearchData dataOnPage={dataOnPage} />
          ) : showFavorites ? (
            <Favorites dataOnPage={dataOnPage} />
          ) : (
            books.map((book) => <BookCard key={book.id} book={book} />)
          )}
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

Goods.propTypes = {
  showFavorites: PropTypes.bool.isRequired,
};
export default Goods;
