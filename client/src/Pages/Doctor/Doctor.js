import React from "react";
import './Doctor.css'
import Navbar from "../../components/Navbar/Navbar";
import { Doctorbody } from "../../components/Doctor/Doctorbody";
const Doctor = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main-doc-container">
      <Doctorbody></Doctorbody>
      </div>
      <div className="do ctor-body"></div>
    </div>
  );
};

export default Doctor;
