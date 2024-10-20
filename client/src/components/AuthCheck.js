import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./store/UserContext";

// This component ensures only logged-in users access certain routes
const AuthCheck = ({ children }) => {
  const { isLoggedIn, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>; // Show loading while auth is being checked
  }

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default AuthCheck;
