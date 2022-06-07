const API_URL = "http://0.0.0.0:4000/"

function fetcher(url: string, header: Headers) {
  return fetch(`${API_URL}${url}`, {
    headers: header,
  }).then((response) => response.json());
}

export default fetcher;
  