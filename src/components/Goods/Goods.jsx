import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getBooks } from "../../redux/booksSlice";
import BookCard from "../BookCard/BookCard";
import { CardsContainerStyled } from "./styles";

const Goods = (props) => {
  const isLoading = useSelector((state) => state.books.isLoading);
  const books = useSelector((state) => state.books.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBooks());
  }, []);
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <div>
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
