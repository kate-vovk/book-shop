import React from "react";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { getBooksByTitle } from "../../../../api/books";
import { setSearchedBooks, setNotFound } from "../../../../redux/searchSlice";
import { setPage } from "../../../../redux/paginationSlice";

import { SearchContainer, SearchIconContainer } from "./styles";

const Search = () => {
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    getBooksByTitle(event.target.value).then((books) => {
      dispatch(setPage(1));
      if (event.target.value === "") {
        dispatch(setSearchedBooks([]));
      } else {
        dispatch(setSearchedBooks(books));
      }
      if (!books.length) {
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
      />
    </SearchContainer>
  );
};

Search.propTypes = {};

export default Search;
