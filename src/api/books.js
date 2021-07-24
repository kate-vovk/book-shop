import HTTPService from "../services/HTTPService";

export const getBooksApi = (id = "") => {
  return HTTPService.get(`/books/${id}`);
};

export const getBooksPageApi = (page = 1, limit = 5) => {
  return HTTPService.get(`/books?_page=${page}&_limit=${limit}`);
};

export const getPageAmount = (limit = 5) => {
  const response = async () => getBooksApi();
  console.log("response", response);
  getBooksApi().then((res) => {
    console.log("res", res);
    // const booksAmount = res.headers["x-total-count"];
    // console.log("booksAmount", res.headers.get("X-Total-Count"));
    // return booksAmount / limit === 0
    //   ? booksAmount / limit
    //   : booksAmount / limit + 1;
  });
};
