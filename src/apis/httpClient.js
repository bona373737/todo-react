/**
 * @description http통신 로직 관심사분리
 * httpClientInterface
 * fetch(endPoint, options): Promise<Response>
 */
import axios from "axios";

export class HttpClient {
  constructor(baseURL, tokenRepository) {
    this.baseURL = baseURL;
    this.tokenRepository = tokenRepository;
  }

  fetch(url, options = {}) {
    return window.fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.tokenRepository.get(),
        ...options.headers,
      },
    });
  }
}