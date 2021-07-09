import HTTPService from "../services/HTTPService";

const BASE_URL = "http://localhost:3100";

// data was taken from https://bookstore.docs.apiary.io/#reference/books/databooks/get

export const getBooksApi = (id = "") => {
  return HTTPService.get(`${BASE_URL}/books/${id}`);
};
