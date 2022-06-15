import { API_URL } from "./fetcher";

const authorise = (): boolean => {
  let userId: string | null = localStorage.getItem("userId");

  const checkAuth = async () => {
    await fetch(`${API_URL}auth/${userId}`, {
      credentials: 'include',
      headers: { "Content-Type": "application/json", },
    }).then((response) => {
      if (!(response.ok)) {
        localStorage.setItem("userId", "-1");
      } else {
        localStorage.setItem("userId", userId == null ? "-1" : userId);
      }
      //localStorage.setItem("isLogged", JSON.stringify(response.ok));
    });
  }
  
  console.log(userId);
  if (userId != null && userId !== "-1") {
    checkAuth();
  
    // if (localStorage.getItem("isLogged") === "true") {
    //   return true;
    // }
    if (localStorage.getItem("userId") !== "-1") {
      return true;
    }
  }
  return false;
}

export default authorise;
