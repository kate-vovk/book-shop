const BASE_URL = "http://localhost:3100";

export default class HTTPService {
  static request({ path, ...options }) {
    return fetch(`${BASE_URL}${path}`, options).then((response) =>
      this.parseResponse(response)
    );
  }

  static get(path, options = {}) {
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
    console.log(response.status);
    if (response.status === "401" || response.status === 401) {
      return response.status;
    }
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(response.status));
  }
}
