import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { getBooks } from "../../redux/booksSlice";
import Goods from "./components/Goods/Goods";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import SlickSlider from "./components/SlickSlider/SlickSlider";
import { setPage } from "../../redux/paginationSlice";
import { FavoriteSearchContainer } from "./styles";

const Books = () => {
  const [showFavorites, toggleFavorites] = React.useState(false);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pagination.page);
  const limit = useSelector((state) => state.pagination.limit);

  React.useEffect(() => {
    dispatch(getBooks({ page, limit }));
  }, [page]);

  const onClickFavoritesButton = () => {
    dispatch(setPage(1));
    toggleFavorites(!showFavorites);
  };
  return (
    <div>
      <SlickSlider />
      <FavoriteSearchContainer>
        <Button onClick={onClickFavoritesButton}>
          {showFavorites ? "Show All" : "Show Favorites"}
        </Button>
        <Search />
      </FavoriteSearchContainer>

      <Goods showFavorites={showFavorites} />
      <Pagination showFavorites={showFavorites} />
    </div>
  );
};

export default Books;
