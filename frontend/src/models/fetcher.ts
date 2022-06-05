const API_URL = process.env.API_URL ?? "http://api:3001/"

function fetcher(url: string, header: Headers) {
  return fetch(`${API_URL}${url}`, {
    headers: header,
  }).then((response) => response.json());
}

export default fetcher;
  