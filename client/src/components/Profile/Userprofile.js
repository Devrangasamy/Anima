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
      {lists.map((list) => {
          if (list.username !== props.name)
          {console.log(list.username,props.name);}
         
        // return(
        //   <div>
        //     <h1>{list.username}</h1>
        //     <p>{list.email}</p>
        //     <p>{list.contact}</p>
        //     {console.log("xcvbnm,")}
        //     {console.log(list)}
        //   </div>
        //   )
        
      })}
    </div>
  );
};
