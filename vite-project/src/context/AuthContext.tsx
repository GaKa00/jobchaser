import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    

  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
