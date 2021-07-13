import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import BookCard from "./components/BookCard/BookCard";
import { CardsContainerStyled } from "./styles";

const Goods = () => {
  const isLoading = useSelector((state) => state.books.isLoading);
  const books = useSelector((state) => state.books.data);

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <div>
      <CardsContainerStyled>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </CardsContainerStyled>
    </div>
  );
};

export default Goods;
