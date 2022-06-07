const API_URL = "http://api:4000/"

function fetcher(url: string, header: Headers) {
  return fetch(`${API_URL}${url}`, {
    headers: header,
  }).then((response) => response.json());
}

export default fetcher;
  