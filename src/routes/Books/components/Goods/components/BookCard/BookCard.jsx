/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import { CardActionArea, CardContent, Typography } from "@material-ui/core";
import { useRouteMatch, useHistory } from "react-router-dom";
import { CardStyled, CardWidth, CardMediaStyled } from "./styles";
import CardFooter from "../../../../../../_shared/CardFooter/CardFooter";

const BookCard = ({ book }) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`${url}/${book.id}`);
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
        <CardFooter bookId={book.id} />
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
