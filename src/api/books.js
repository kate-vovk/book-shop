import HTTPService from "../services/HTTPService";

export const getBooksApi = (id = "") => {
  return HTTPService.get(`/books/${id}`);
};
