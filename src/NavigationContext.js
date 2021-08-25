import React, { useEffect, useState } from "react";

export const NavigationContext = React.createContext();

export const NavigationProvider = ({ children }) => {
  const [pathname, setCurrentPathName] = useState();

  useEffect(() => {
    window.onpopstate = setCurrentPathName(window.location.pathname);
  }, []);

  const navigate = (pathname) => {
    setCurrentPathName(pathname);
    window.history.pushState(null, null, pathname);
  };

  return (
    <NavigationContext.Provider value={{ pathname, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};
