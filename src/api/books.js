import HTTPService from "../services/HTTPService";

const BASE_URL = "http://localhost:3100";

export const getBooksApi = (id = "") => {
  return HTTPService.get(`${BASE_URL}/books/${id}`);
};
