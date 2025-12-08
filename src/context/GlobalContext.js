// src/context/GlobalContext.js
import React, { createContext, useState, useContext } from "react";

// 1. Create the Context
const GlobalContext = createContext();

// 2. Create the Provider Component
export const GlobalProvider = ({ children }) => {
  // State for theme: true = Dark, false = Light
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <GlobalContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

// 3. Custom Hook to consume the context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
