/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import {
  CardActionArea,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CardStyled,
  FooterStyled,
  CardWidth,
  CartButtonStyled,
  CardMediaStyled,
} from "./styles";
import { toggleAdding } from "../../../../../../redux/cartSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart.id);
  const onClickHandler = () => {
    history.push(`${url}/${book.id}`);
  };
  const onClickAddToCartHandler = () => {
    dispatch(toggleAdding(book.id));
  };
  return (
    <div>
      <CardStyled css={CardWidth}>
        <CardActionArea onClick={onClickHandler}>
          <Typography>{book.title}</Typography>
          <CardMediaStyled image={book.image} />
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
          <CartButtonStyled
            onClick={onClickAddToCartHandler}
            isAddedToCart={Boolean(cart.includes(book.id))}
          >
            <ShoppingBasketIcon />
          </CartButtonStyled>
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
