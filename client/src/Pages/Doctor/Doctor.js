import React from "react";
import './Doctor.css'
import Navbar from "../../components/Navbar/Navbar";
import { Searchbar } from "../../components/Doctor/Searchbar";
import { Doctorbody } from "../../components/Doctor/Doctorbody";
const Doctor = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main-doc-container">

      <Searchbar></Searchbar>
      <Doctorbody></Doctorbody>
      </div>
      <div className="do ctor-body"></div>
    </div>
  );
};

export default Doctor;
