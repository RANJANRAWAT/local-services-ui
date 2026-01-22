import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedLoginState = localStorage.getItem("isLoggedIn");
    if (savedUser && savedLoginState === "true") {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (email, password) => {
    // Dummy login - accept any email/password
    const userData = {
      email: email,
      name: email.split("@")[0], // Extract name from email
      loginTime: new Date().toISOString(),
    };
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");
    return true;
  };

  const register = (userData) => {
    // Dummy registration
    const newUser = {
      email: userData.email,
      name: userData.name,
      phone: userData.phone,
      registerTime: new Date().toISOString(),
    };
    setUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("isLoggedIn", "true");
    return true;
  };

  const updateUser = (updatedData) => {
    if (!user) return false;
    const updatedUser = {
      ...user,
      ...updatedData,
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
  };

  const value = {
    isLoggedIn,
    user,
    login,
    register,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
