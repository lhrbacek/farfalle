  function fetcher(url: string, header: Headers) {
    return fetch(`http://localhost:4000/${url}`, {
      headers: header,
    }).then((response) => response.json());
  }
  
  export default fetcher;
  