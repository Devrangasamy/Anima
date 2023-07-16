import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import userprofilebanner from "../../Assets/profile_banner.jpg";
import "./Userprofile.css";
import { ProfileInformation } from "./ProfileInformation";
import AdditionalInfo from "./AdditionalInfo";
import Petdetails from "./Petprofiledetails";

export const Userprofile = () => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState([]);
  const [profileupdatealert, setprofileupdatealert] = useState(false);

  const [additionaldetails, setadditionaldetails] = useState(true);
  const [petdetails, setpetdeatils] = useState(false);
  useEffect(() => {
    console.log("vhjk");
    axios
      .get(
        `https://rich-gray-macaw-sock.cyclic.app/api/auth/name/${localStorage.getItem(
          "username"
        )}`
      )
      .then((data) => {
        setUserdata(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const setPage = (e) => {
    const value = e.target.value;
    if (value === "additionaldetails") {
      setadditionaldetails(true);
      setpetdeatils(false);
    }
    if (value === "petdetails") {
      setpetdeatils(true);
      setadditionaldetails(false);
    }
  };

  return (
    <div className="my-3 p-4 profile-container container">
      <div className="user-profile-inner-container">
        {/* {profileupdatealert && (
          <div
            className="alert alert-success profileupdatealert text-light"
            role="alert"
          >
            Data is updating please wait!!!
          </div>
        )} */}
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

      <div className="additional-details-conatiner my-4 d-flex gap-4">
        <button
          className="btn btn-light"
          value="additionaldetails"
          onClick={setPage}
        >
          Additional details
        </button>
        <button className="btn btn-light" value="petdetails" onClick={setPage}>
          petdetails
        </button>
        <button
          className="btn btn-success"
          onClick={() => navigate("/petregister")}
        >
          petregister
        </button>
      </div>

      {additionaldetails && (
        <AdditionalInfo userdata={userdata} setUserdata={setUserdata} />
      )}
      {petdetails && <Petdetails id={userdata._id}></Petdetails>}
    </div>
  );
};
