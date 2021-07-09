import React from "react";
import { useHistory } from "react-router-dom";
// import PropTypes from "prop-types"

const request = ({ path, ...options }) =>
  fetch(path, options)
    .then((response) => response.json())
    .catch((err) => {
      console.log("API call error", err.message);
    });

const HTTPService = {
  get: (path, options = {}) => request({ method: "GET", path, ...options }),
  post: (path, body) =>
    request({
      method: "POST",
      path,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }),
  parseResponse: (path) =>
    fetch(path)
      .then((response) => {
        if (response.status === "401" || response.status === 401) {
          const history = useHistory();
          history.push("/login");
        }
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error("error"));
      })
      .catch((err) => {
        console.log(err.message);
      }),
};

HTTPService.propTypes = {};

export default HTTPService;
