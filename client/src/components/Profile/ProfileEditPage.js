import React from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Singlechange } from "./Singlechange";
// import { Link } from "react-router-dom";
import "./ProfileEditPage.css";
export const ProfileEditPage = (props) => {
  const { username, useremail, usercontact, close, update } = props;
  console.log(props);
  //   const navigate = useNavigate();

  const [updatename, setupdatename] = Singlechange(username);
  const [updateemail, setupdateemail] = Singlechange(useremail);
  const [updatecontact, setupdatecontact] = Singlechange(usercontact);

  const submit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8000/api/auth/${localStorage.getItem("username")}`,
        { username: updatename, email: updateemail, contact: updatecontact }
      )
      .then((data) => {
        console.log("data upadted successfully");
        update();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="profile-edit-page-container py-4 rounded">
      <div>
        <form>
          <div className="mb-3 mt-3">
            <label className="form-label">Email:</label>
            <input
              type="text"
              className="form-control"
              value={updatename}
              onChange={setupdatename}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="email"
              value={updateemail}
              onChange={setupdateemail}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="number"
              value={updatecontact}
              onChange={setupdatecontact}
              className="form-control"
            ></input>
          </div>
        </form>
        <div className="d-flex justify-content-end gap-4 mx-5">
          <button onClick={submit} className="btn btn-success">
            submit
          </button>
          <button className="btn btn-success" type="button" onClick={close}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
