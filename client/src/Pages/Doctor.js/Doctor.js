import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Searchbar } from "../../components/Doctor/Searchbar";
import { Doctorbody } from "../../components/Doctor/Doctorbody";
const Doctor = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Searchbar></Searchbar>
      <Doctorbody></Doctorbody>
      <div className="doctor-body"></div>
    </div>
  );
};

export default Doctor;
