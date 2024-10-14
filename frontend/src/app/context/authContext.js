"use client";
import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [userDataLoading, setUserDataLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserData(decodedToken);
    }
    setUserDataLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData, userDataLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
