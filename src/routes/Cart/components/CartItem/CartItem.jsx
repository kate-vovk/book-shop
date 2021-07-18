import PropTypes from "prop-types";
import { ListItemText, Paper } from "@material-ui/core";
import ItemPriceAndButtons from "./components/ItemPriceAndButtons";
import {
  CartListItemContainerStyled,
  ListItemIconStyled,
  BookDescriptionContainer,
  ConstImageTextContainerStyled,
  TextContainerStyled,
  AuthorContainer,
} from "./styles";

const CartItem = ({ id, title, author, description, image, price }) => {
  return (
    <CartListItemContainerStyled id={id} component={Paper}>
      <ConstImageTextContainerStyled>
        <ListItemIconStyled>
          <img alt={image} src={image} />
        </ListItemIconStyled>
        <TextContainerStyled>
          <ListItemText
            primary={<h4>{title}</h4>}
            secondary={
              <>
                <AuthorContainer>{author}</AuthorContainer>
                <br />
                <BookDescriptionContainer>
                  {description}
                </BookDescriptionContainer>
              </>
            }
          />
        </TextContainerStyled>
      </ConstImageTextContainerStyled>

      <ItemPriceAndButtons id={id} price={price} />
    </CartListItemContainerStyled>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string,
    value: PropTypes.number,
    displayValue: PropTypes.string,
  }).isRequired,
};

export default CartItem;
