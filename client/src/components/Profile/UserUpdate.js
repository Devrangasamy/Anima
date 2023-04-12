import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Singlechange } from "./Singlechange";

export const UserUpdate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, contact } = location.state;

  const [updatename, setupdatename] = Singlechange(name);
  const [updateemail, setupdateemail] = Singlechange(email);
  const [updatecontact, setupdatecontact] = Singlechange(contact);

  const submit = (e) => {
    e.preventDefault();
    console.log(updatename, updateemail, updatecontact);
    axios
      .put(
        `http://localhost:8000/api/auth/${localStorage.getItem("username")}`,
        { username: updatename, email: updateemail, contact: updatecontact }
      )
      .then((data) => {
        console.log(data);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" value={updatename} onChange={setupdatename}></input>
        <input
          type="email"
          value={updateemail}
          onChange={setupdateemail}
        ></input>
        <input
          type="number"
          value={updatecontact}
          onChange={setupdatecontact}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
