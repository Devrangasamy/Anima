import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
export const Userprofile = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/auth")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(List);
  return <div>Hello</div>;
};
