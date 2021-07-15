const BASE_URL2 =
  "https://run.mocky.io/v3/610b11ef-ce6d-4e10-a200-758b2c3b75b1"; // 401
const BASE_URL3 =
  "https://run.mocky.io/v3/40753f57-9aad-4a6c-a477-e69558c0a5c0"; // 404
const BASE_URL4 =
  "https://run.mocky.io/v3/0f2762f5-6813-4478-aa22-e32f47a9dd36"; // 200
export default class HTTPService {
  static request({ path, ...options }) {
    return fetch(`${BASE_URL2}${path}`, options)
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
