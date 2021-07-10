import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useSelector } from "react-redux";

const SlickSlider = () => {
  const settings = {
    dots: true,
    slideToShow: 1,
    slideToScroll: 1,
    speed: 500,
  };
  const books = useSelector((state) => state.books.data);
  return (
    <div
      style={{
        width: "100vw",
        height: "250px",
        marginBottom: "10px",
      }}
    >
      <h2> Single Item</h2>
      <Slider {...settings}>
        {books.map(({ id, image }) => (
          <div key={id}>
            <img
              alt={image}
              src={image}
              style={{ width: "100px", height: "150px", margin: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

SlickSlider.propTypes = {};

export default SlickSlider;
