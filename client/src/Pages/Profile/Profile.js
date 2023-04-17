import React from "react";
import { Userprofile } from "../../components/Profile/Userprofile";
import Navbar from "../../components/Navbar/Navbar";
import "./profile.css";
export const Profile = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Userprofile />;
    </React.Fragment>
  );
};
