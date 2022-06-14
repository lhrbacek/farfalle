import { API_URL } from "./fetcher";

const authorise = (): boolean => {
  let userId: string | null = localStorage.getItem("userId");

  const checkAuth = async () => {
    await fetch(`${API_URL}auth/${userId}`, {
      credentials: 'include',
      headers: { "Content-Type": "application/json", },
    }).then((response) => {
      localStorage.setItem("isLogged", JSON.stringify(response.ok));
    });
  }
  
  if (userId != null) {
    checkAuth();
  
    if (localStorage.getItem("isLogged") === "true") {
      return true;
    }
  }
  return false
}

export default authorise;
