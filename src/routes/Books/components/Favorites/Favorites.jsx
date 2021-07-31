import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getBooksApi } from "../../../../api/books";
import BookCard from "../Goods/components/BookCard/BookCard";

const Favorites = ({ dataOnPage }) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    getBooksApi().then((books) => {
      setItems(books);
    });
  }, []);

  const favorites = useSelector((state) => state.favorites);

  return dataOnPage(
    favorites.map((id) =>
      items
        .filter((el) => el.id === id)
        .map((item) => <BookCard key={item.id} book={item} />)
    )
  );
};

Favorites.propTypes = {
  dataOnPage: PropTypes.func.isRequired,
};
export default Favorites;
