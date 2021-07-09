import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { CardStyled } from "./styles";

// eslint-disable-next-line react/prop-types
const BookCard = ({ id, title, image, description }) => {
  return (
    <div>
      <CardStyled>
        <CardActionArea onClick={() => console.log("open item2")}>
          <CardMedia component="img" alt="Product Photo" image={image} />
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div style={{ display: "flex", direction: "row" }}>
          <Button>Star</Button>
          <Button>Share</Button>
          <Button>Add</Button>
        </div>
      </CardStyled>
    </div>
  );
};

BookCard.propTypes = {};

export default BookCard;
