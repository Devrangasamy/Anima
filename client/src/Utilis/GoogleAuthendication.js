import React, { useContext, useState } from "react";
const GoogleContext = React.createContext();

export const GoogleAuthendication = (props) => {
  const [credential, setCredential] = useState("");
  const updateCredential = (name) => {
    setCredential(name);
  };
  const resetCrential = () => {
    setCredential("");
  };
  return (
    <GoogleContext.Provider
      value={{ credential, updateCredential, resetCrential }}
    >
      {props.children}
    </GoogleContext.Provider>
  );
};

export const useGoogleContext = () => {
  return useContext(GoogleContext);
};
