import React, { useContext, useState } from "react";
const AuthContext = React.createContext();

export const Authentication = (props) => {
  const [user, setUser] = useState("");
  const [id, setId] = useState("");
  const login = (name, id) => {
    setUser(name);
    setId(id);
  };
  const logout = () => {
    setUser("");
    setId("");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, id }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
