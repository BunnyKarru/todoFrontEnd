import axios from "axios";
import React, { useState, useEffect } from "react";

const authContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const checkAuth = async () => {
    try {
      const result = await axios.get("http://localhost:8000/v1/users/check", {}, { withCredentials: true });

      console.log(result);
      if (result.status === 401) {
        setAuth(false);
      } else {
        console.log(result)
        console.log("aditya");
        setAuth(true);
      }
    } catch (error) {
      setAuth(false);
      console.error("Authentication check failed:", error);
    }
  };

 
  useEffect(() => {
    checkAuth();
}, []);



  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, authContext };
