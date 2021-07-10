/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

import { PrevArrowStyled, NextArrowStyled } from "./styles";

export function PrevArrow(props) {
  const { className, onClick } = props;
  return <PrevArrowStyled className={className} onClick={onClick} />;
}

export function NextArrow(props) {
  const { className, onClick } = props;
  return <NextArrowStyled className={className} onClick={onClick} />;
}
