import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = document.cookie.includes("token=");
  return token ? children : <Navigate to="/login" />;
}
