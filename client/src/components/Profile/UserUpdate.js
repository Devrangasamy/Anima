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
    <div class="parent container d-flex justify-content-center align-items-center h-100">
      <div>
        <form action="/action_page.php" onSubmit={submit}>
            <div class="mb-3 mt-3">
              <label for="email" class="form-label">Email:</label>
              <input type="text" class="form-control" value={updatename} onChange={setupdatename}></input>
            </div>
            <div class="mb-3">
              <label for="pwd" class="form-label">Password:</label>
              <input
                type="email"
                value={updateemail}
                onChange={setupdateemail}
                class="form-control"
                ></input>
            </div>
            <div class="mb-3">
              <label for="pwd" class="form-label">Password:</label>
              <input
                type="number"
                value={updatecontact}
                onChange={setupdatecontact}
                class="form-control"
                ></input>
            </div>
            <button type="submit" className="btn btn-success">submit</button>
        </form>
      </div>
    </div>
  );
};
