/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useRouteMatch, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CardStyled, FooterStyled, CardWidth } from "./styles";
import { toggleAdding } from "../../redux/cartSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const history = useHistory();
  const onClickHandler = () => {
    history.push(`${url}/${book.id}`);
  };
  const onClickAddToCartHandler = () => {
    dispatch(toggleAdding(book));
  };
  return (
    <div>
      <CardStyled css={CardWidth}>
        <Typography>{book.title}</Typography>
        <CardActionArea onClick={onClickHandler}>
          <CardMedia
            image={book.image}
            style={{ width: "150px", height: "200px", margin: "auto" }}
          />
          <CardContent>
            <Typography variant="body2" component="p">
              {book.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <FooterStyled>
          <IconButton>
            <StarIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton onClick={onClickAddToCartHandler}>
            <ShoppingBasketIcon />
          </IconButton>
        </FooterStyled>
      </CardStyled>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    ISBN: PropTypes.number,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string.isRequired,
    summary: PropTypes.string,
    image: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string,
      value: PropTypes.number,
      displayValue: PropTypes.string,
    }),
  }).isRequired,
};

export default BookCard;
