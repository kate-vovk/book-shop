import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useSelector } from "react-redux";
import { PrevArrow, NextArrow } from "./Arrows";
import { SliderContainerStyled, ImageStyled } from "./styles";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const books = useSelector((state) => state.books.data);
  return (
    <SliderContainerStyled>
      <Slider {...settings}>
        {books.map(({ id, image }) => (
          <div key={id}>
            <ImageStyled key={id} alt={image} src={image} />
          </div>
        ))}
      </Slider>
    </SliderContainerStyled>
  );
};

SlickSlider.propTypes = {};

export default SlickSlider;
