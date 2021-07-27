import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import BookCard from "../Goods/components/BookCard/BookCard";

const SearchData = ({ dataOnPage }) => {
  const getSearchedData = createSelector(
    (state) => state.search.searchedData,
    (searchedBooks) => dataOnPage(searchedBooks)
  );
  const searchedData = useSelector(getSearchedData);

  return searchedData.map((book) => <BookCard key={book.id} book={book} />);
};

SearchData.propTypes = {
  dataOnPage: PropTypes.func.isRequired,
};

export default SearchData;
