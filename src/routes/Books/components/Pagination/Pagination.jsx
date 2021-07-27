import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Pagination as PaginationComponent } from "@material-ui/lab";
import { getBooksApi } from "../../../../api/books";
import { ButtonStyled, ContainerStyled } from "./styles";
import { getBooks } from "../../../../redux/booksSlice";
import { setPage, incrementPage } from "../../../../redux/paginationSlice";

const Pagination = ({ showFavorites }) => {
  const [maxPage, setMaxPage] = React.useState(1);
  const limit = useSelector((state) => state.pagination.limit);
  const currentPage = useSelector((state) => state.pagination.page);
  const books = useSelector((state) => state.books.data);
  const searchedData = useSelector((state) => state.search.searchedData);
  const notFound = useSelector((state) => state.search.notFound);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const isMaxPage = currentPage === maxPage;
  React.useEffect(() => {
    getBooksApi().then((items) => {
      // eslint-disable-next-line no-nested-ternary
      const booksAmount = searchedData.length
        ? searchedData.length
        : showFavorites
        ? favorites.length
        : items.length;
      const p =
        booksAmount / limit === 0
          ? booksAmount / limit
          : booksAmount / limit + 1;
      setMaxPage(Math.trunc(p));
    });
  }, [searchedData, favorites, showFavorites, books]);

  function onClickHandler() {
    dispatch(incrementPage());
    const page = currentPage + 1;
    dispatch(getBooks({ page, limit }));
  }
  function onChangeHandler(event, page) {
    dispatch(setPage(page));
    dispatch(getBooks({ page, limit }));
  }
  return (
    <div>
      {notFound ? null : (
        <ContainerStyled>
          <ButtonStyled isMaxPage={isMaxPage} onClick={onClickHandler}>
            Show more
          </ButtonStyled>
          <PaginationComponent
            count={maxPage}
            page={currentPage}
            onChange={onChangeHandler}
          />
        </ContainerStyled>
      )}
    </div>
  );
};

Pagination.propTypes = { showFavorites: PropTypes.bool.isRequired };

export default Pagination;
