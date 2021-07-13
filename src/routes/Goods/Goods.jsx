import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/booksSlice";
import Spinner from "./components/Spinner/Spinner";
import BookCard from "./components/BookCard/BookCard";
import { CardsContainerStyled } from "./styles";

const Goods = () => {
  const isLoading = useSelector((state) => state.books.isLoading);
  const books = useSelector((state) => state.books.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBooks());
  }, []);
  if (isLoading) {
    return <Spinner />;
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
