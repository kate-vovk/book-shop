import React from "react";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { getBooksByTitle } from "../../../../api/books";
import {
  setInputValue,
  setSearchedBooks,
  setNotFound,
} from "../../../../redux/searchSlice";
import { setPage } from "../../../../redux/paginationSlice";

import { SearchContainer, SearchIconContainer } from "./styles";

const Search = () => {
  const inputValue = useSelector((state) => state.search.inputValue);

  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    dispatch(setInputValue(event.target.value));
    getBooksByTitle(event.target.value).then((searchedBooks) => {
      dispatch(setPage(1));
      if (event.target.value === "") {
        dispatch(setSearchedBooks([]));
      } else {
        dispatch(setSearchedBooks(searchedBooks));
      }
      if (!searchedBooks.length) {
        dispatch(setNotFound(true));
      }
    });
  };
  return (
    <SearchContainer>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <InputBase
        style={{ width: "80%" }}
        placeholder="Search"
        onChange={onChangeHandler}
        value={inputValue}
      />
    </SearchContainer>
  );
};

Search.propTypes = {};

export default Search;
