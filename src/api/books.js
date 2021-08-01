import HTTPService from "../services/HTTPService";

export const getBooksApi = (id = "") => {
  return HTTPService.get(`/books/${id}`);
};

export const getBooksPageApi = (page = 1, limit = 5) => {
  return HTTPService.get(`/books?_page=${page}&_limit=${limit}`);
};

export const getBooksByTitle = (title = "") => {
  return HTTPService.get(`/books/?title_like=${title}`);
};

export const getBooksByAuthor = (author = "") => {
  return HTTPService.get(`/books/?author=${author}`);
};
