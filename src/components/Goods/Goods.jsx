import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { getBooks } from "../../redux/booksSlice";
import BookCard from "../BookCard/BookCard";
import { CardsContainerStyled } from "./styles";

const Goods = (props) => {
  // const getBooksSelector = createSelector((state) => state.books.data);
  const isLoading = useSelector((state) => state.books.isLoading);
  const books = useSelector((state) => state.books.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBooks());
  }, []);
  if (isLoading) {
    return <p>isLoading</p>;
  }
  return (
    <div>
      <button type="button" onClick={() => console.log(books)}>
        Click
      </button>
      <CardsContainerStyled>
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </CardsContainerStyled>
    </div>
  );
};

Goods.propTypes = {};

export default Goods;
