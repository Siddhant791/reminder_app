// PortalContext.js
import React, { createContext, useContext, useState } from 'react';

const PortalContext = createContext();

export const PortalContextProvider = ({ children }) => {
  const [portalData, setPortalData] = useState(null);

  return (
    <PortalContext.Provider value={{ portalData, setPortalData }}>
      {children}
    </PortalContext.Provider>
  );
};

export const usePortalContext = () => useContext(PortalContext);
