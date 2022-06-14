import { useLocation, Navigate, Outlet } from "react-router-dom";
import authorise from "../../models/authorise";

const RequireAuth = () => {
  const location = useLocation();

  let isAdmin: boolean = false;

  // send to server GET with cookies - when token is good, user is authorised
  // when token is not good or none, user is navigated to login page
  let isLogged: boolean = authorise();

  return (
    isLogged ? <Outlet />
      : <Navigate to="/signin" state={{ from: location }} replace />
  );
}

export default RequireAuth;
