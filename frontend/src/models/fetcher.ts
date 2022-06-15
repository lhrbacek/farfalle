export const API_URL = "http://localhost:4000/"

function fetcher(url: string, header: Headers) {
  return fetch(`${API_URL}${url}`, {
    credentials: "include",
    headers: header,
  }).then((response) => response.json());
}

export default fetcher;
  