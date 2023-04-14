import axios from "axios";
import React, { useEffect, useState } from "react";

// Components
import userprofilebanner from "../../Assets/profile_banner.jpg";
import "./Userprofile.css";
import { ProfileInformation } from "./ProfileInformation";

import AdditionalInfo from "./AdditionalInfo";

export const Userprofile = () => {
  const [userdata, setUserdata] = useState([]);
  const [profileupdatealert, setprofileupdatealert] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/auth/name/${localStorage.getItem(
          "username"
        )}`
      )
      .then((data) => {
        console.log(data + "data");
        setUserdata(data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(userdata);

  return (
    <div className="my-3 p-4 profile-container container">
      <div className="user-profile-inner-container">
        {profileupdatealert && (
          <div
            className="alert alert-success profileupdatealert text-light"
            role="alert"
          >
            Data is updating please wait!!!
          </div>
        )}
        <img
          src={userprofilebanner}
          className="user-profile-banner rounded img-fluid"
          alt="Profile banner"
        />
        {/* Profile Information page */}
        <ProfileInformation
          userdata={userdata}
          setUserdata={setUserdata}
          setprofileupdatealert={setprofileupdatealert}
        ></ProfileInformation>
      </div>
      <AdditionalInfo userdata={userdata} />
    </div>
  );
};
