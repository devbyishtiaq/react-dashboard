import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useUserContext();

  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
