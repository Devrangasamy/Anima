import React from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "./Authentication";
const RequiredAuth = (props) => {
  const location = useLocation();
  const Auth = useAuth();
  if (!Auth.user) {
    return <Navigate to="/signup" state={{ path: location.pathname }} />;
  } else {
    return props.children;
  }
};
export default RequiredAuth;
