/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useRouteMatch, useHistory } from "react-router-dom";
import { CardStyled, FooterStyled, CardWidth } from "./styles";

const BookCard = ({ id, title, image, description }) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const onClickHandler = () => {
    history.push(`${url}/${id}`);
  };
  return (
    <div>
      <CardStyled css={CardWidth}>
        <CardActionArea onClick={onClickHandler}>
          <Typography>{title}</Typography>
          <CardMedia
            image={image}
            style={{ width: "150px", height: "200px", margin: "auto" }}
          />
          <CardContent>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <FooterStyled>
          <IconButton>
            <StarIcon />
          </IconButton>
          <Button>
            <ShareIcon />
          </Button>
          <Button>
            <ShoppingBasketIcon />
          </Button>
        </FooterStyled>
      </CardStyled>
    </div>
  );
};

BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BookCard;
