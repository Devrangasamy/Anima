import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export const Userprofile = (props) => {
  const [lists, setList] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/auth")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(lists);
  return (
    <div>
      Arun
    </div>
  );
};
