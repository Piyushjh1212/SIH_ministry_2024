// src/context/GlobalContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [modelLoaded, setModelLoaded] = useState(false); // For controlling model visibility
  const [modelPath, setModelPath] = useState(null); // To store the path of the 3D model

  const setModelStatus = (status, path = null) => {
    setModelLoaded(status);
    if (path) {
      setModelPath(path); // Set the model path when loading a new model
    }
  };

  return (
    <GlobalContext.Provider value={{ modelLoaded, setModelStatus, modelPath }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the global context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
