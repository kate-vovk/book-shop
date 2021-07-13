import PropTypes from "prop-types";
import { PrevArrowStyled, NextArrowStyled } from "./styles";

export function PrevArrow(props) {
  const { className, onClick } = props;
  return <PrevArrowStyled className={className} onClick={onClick} />;
}

export function NextArrow(props) {
  const { className, onClick } = props;
  return <NextArrowStyled className={className} onClick={onClick} />;
}

PrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

NextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
