import React, { useState, createContext, useEffect } from "react";
import Loader from "../Loader";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5000/auth", {
          withCredentials: true,
        });
        console.log(response.data);
        setUser(response.data);
        setIsLoggedIn(true);
      } catch (error) {
        console.log("Not authenticated");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setLoading(false)
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout, loading }}>
      {loading ? <Loader /> : children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
