import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import BookCard from "../Goods/components/BookCard/BookCard";

const SearchData = ({ showFavorites, dataOnPage }) => {
  const getSearchedData = createSelector(
    (state) => state.search.searchedData,
    (searchedBooks) => dataOnPage(searchedBooks)
  );
  const searchedData = useSelector(getSearchedData);
  const favorites = useSelector((state) => state.favorites);

  return showFavorites
    ? dataOnPage(
        favorites.map((id) =>
          searchedData
            .filter((book) => book.id === id)
            .map((item) => <BookCard key={item.id} book={item} />)
        )
      )
    : searchedData.map((book) => <BookCard key={book.id} book={book} />);
};

SearchData.propTypes = {
  showFavorites: PropTypes.bool.isRequired,
  dataOnPage: PropTypes.func.isRequired,
};

export default SearchData;
