import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  const loginRole = (newRole) => {
    localStorage.setItem("role", newRole);
    setRole(newRole);
  };

  const logoutRole = () => {
    localStorage.removeItem("role");
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ role, loginRole, logoutRole }}>
      {children}
    </AuthContext.Provider>
  );
}
