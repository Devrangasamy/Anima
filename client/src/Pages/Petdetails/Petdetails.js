import React from "react";
import { useLocation } from "react-router-dom";

import Petdetail from "../../components/Petdetail/Petdetail";
import Navbar from "../../components/Navbar/Navbar";
import Allservices from "../../components/Petdetail/Allservices";
import "./petdetails.css";
const Petdetails = () => {
  const location = useLocation();
  const { petID } = location.state;
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mt-5">
        <Petdetail petID={petID}></Petdetail>
        <Allservices></Allservices>
      </div>
    </div>
  );
};

export default Petdetails;
