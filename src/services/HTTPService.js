// data was taken from https://bookstore.docs.apiary.io/#reference/books/databooks/get
const BASE_URL_GET = "http://localhost:3100";
const BASE_URL_POST = "http://localhost:3200";

export default class HTTPService {
  static request({ path, ...options }) {
    let BASE_URL;
    if (options.method === "POST") {
      BASE_URL = BASE_URL_POST;
    }
    if (options.method === "GET") {
      BASE_URL = BASE_URL_GET;
    }
    return fetch(`${BASE_URL}${path}`, options)
      .then((response) => this.parseResponse(response))
      .catch((err) => {
        return err.message;
      });
  }

  static get(path = "", options = {}) {
    return this.request({ method: "GET", path, ...options });
  }

  static post(path, body) {
    return this.request({
      method: "POST",
      path,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  static parseResponse(response) {
    if (Number(response.status) === 401) {
      return Promise.reject(Error("redirect"));
    }
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(Error("error"));
  }
}
