import React from "react";
import PropTypes from "prop-types";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { getBooksByTitle } from "../../../../api/books";
import { setSearchedBooks, setNotFound } from "../../../../redux/booksSlice";
import NotFound from "../../../NotFound/NotFound";

const Search = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.data);

  // const [notFound, setNotFound] = React.useState(false);
  const onChangeHandler = (event) => {
    // console.log(event.target.value);
    // setTitle(event.target.value);
    getBooksByTitle(event.target.value).then((values) => {
      if (event.target.value === "") {
        dispatch(setSearchedBooks([]));
      } else {
        dispatch(setSearchedBooks(values));
      }
      if (!values.length) {
        console.log("setNotFound(true)");
        dispatch(setNotFound(true));
      }
      console.log(values);
    });
  };
  return (
    <div
      style={{
        width: "60%",
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "pink",
        margin: "auto",
        cursor: "text",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchIcon />
      </div>
      <InputBase
        style={{ width: "80%" }}
        placeholder="Search"
        onChange={onChangeHandler}
      />
    </div>
  );
};

Search.propTypes = {};

export default Search;
