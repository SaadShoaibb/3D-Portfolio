import React, { createContext, useContext, useState } from 'react';

const WebGLContext = createContext();

export const useWebGLContext = () => useContext(WebGLContext);

export const WebGLContextProvider = ({ children }) => {
  const [activeCanvas, setActiveCanvas] = useState('Computers');

  return (
    <WebGLContext.Provider value={{ activeCanvas, setActiveCanvas }}>
      {children}
    </WebGLContext.Provider>
  );
};
