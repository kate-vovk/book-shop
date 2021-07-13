import React from "react";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner/Spinner";
import BookCard from "./components/BookCard/BookCard";
import { CardsContainerStyled } from "./styles";

const Goods = () => {
  const isLoading = useSelector((state) => state.books.isLoading);
  const books = useSelector((state) => state.books.data);

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

export default Goods;
