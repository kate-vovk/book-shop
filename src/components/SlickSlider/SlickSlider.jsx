/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useSelector } from "react-redux";
import { Paper } from "@material-ui/core";

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        marginLeft: 50,
        zIndex: "9999",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", marginRight: 50 }}
      onClick={onClick}
    />
  );
}

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
    <Paper
      style={{
        width: "85vw",
        height: "250px",
        margin: "auto",
        marginBottom: "10px",
        backgroundColor: "lightgrey",
      }}
    >
      <h2> Single Item</h2>
      <Slider {...settings}>
        {books.map(({ id, image }) => (
          <div
            key={id}
            style={{
              backgroundColor: "green",
              width: "150px",
              height: "200px",
            }}
          >
            <img
              key={id}
              alt={image}
              src={image}
              style={{ width: "100px", height: "150px", margin: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </Paper>
  );
};

SlickSlider.propTypes = {};

export default SlickSlider;
