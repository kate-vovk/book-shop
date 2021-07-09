/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/style";
import React from "react";
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
import { useRouteMatch, useHistory } from "react-router";
import { CardStyled, FooterStyled, CardWidth } from "./styles";

// eslint-disable-next-line react/prop-types
const BookCard = ({ id, title, image, summary, description }) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const onClickHandler = () => {
    console.log(url, history);
    history.push(`${url}/${id}`);
  };
  return (
    <div>
      <CardStyled css={CardWidth}>
        <Typography>{title}</Typography>
        <CardActionArea onClick={onClickHandler}>
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

BookCard.propTypes = {};

export default BookCard;
