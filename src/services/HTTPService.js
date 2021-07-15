// data was taken from https://bookstore.docs.apiary.io/#reference/books/databooks/get
const BASE_URL = "http://localhost:3100";

export default class HTTPService {
  static request({ path, ...options }) {
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
