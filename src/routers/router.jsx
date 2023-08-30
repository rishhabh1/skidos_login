import React from "react";
import { Route, Navigate } from "react-router-dom";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ children }) => {


  const isAuthenticated = true;
  console.log(isAuthenticated, "isAuthenticated");
  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
