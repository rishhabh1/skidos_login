import React from "react";
import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
  const access_token = localStorage.getItem("token");

  return access_token ? <Outlet /> : <Navigate to={`/`} />;
  // return access_token ? <Outlet /> : <SignIn />;
}
