import React, { createContext, useContext, useState } from 'react';

const ShallowDocumentVisibilityContext = createContext();

export const useShallowDocumentVisibility = () => useContext(ShallowDocumentVisibilityContext);

export const ShallowDocumentVisibilityProvider = ({ children }) => {
  const [shallowDocumentVisible, setShallowDocumentVisible] = useState(true);

  const toggleShallowDocumentVisibility = () => {
    setShallowDocumentVisible((prevVisible) => !prevVisible);
  };

  return (
    <ShallowDocumentVisibilityContext.Provider
      value={{ shallowDocumentVisible, toggleShallowDocumentVisibility }}
    >
      {children}
    </ShallowDocumentVisibilityContext.Provider>
  );
};
