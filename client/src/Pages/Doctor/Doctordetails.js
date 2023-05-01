import "./Doctordetails.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./../../components/Navbar/Navbar";

const Doctordetails = () => {
  const [list, setlist] = useState([]);
  const [datalist, setDatalist] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://rich-gray-macaw-sock.cyclic.app/api/doctor/")
      .then((response) => {
        setDatalist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    for (var i = 0; i < datalist.length; i++) {
      var a = datalist[i].id;
      if (a === id) {
        setlist(datalist[i]);
        break;
      }
    }
  }, [datalist]);
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="container-doctor-profile">
        <div className="container-doctor-profile-left">
          <div className="doctor-content-left">
            <div className="clinic-name">
            <h1>{list.clinic_name}</h1>
            </div>
            <br />
            <div className="personaldetails-container">
              <div className="grid-3 inside-personal1">
                <h4 className="doctor-feature">Experience   :</h4>
                <h4>{list.years_of_experience}</h4>
              </div>

              <div className="grid-3 inside-personal1">
                <h4 className="doctor-feature">Language   :</h4>
                <div className="grid-3">
                  <h4>
                  {list.languages_spoken}
                  </h4>
                </div>
              </div>

              <div className="grid-3 inside-personal1">
                <h4 className="doctor-feature">Certifications  :</h4>
                <div className="grid-3">
                  <h4>
                  {list.certifications}
                  </h4>
                </div>
              </div>

              <div className="grid-3 inside-personal1">
                <h4 className="doctor-feature">Services :</h4>
                <div className="grid-3">
                  <h4>
                  {list.services_provided}
                  </h4>
                </div>
              </div>
              <div className="grid-3 inside-personal1">
                <h4 className="doctor-feature">Address  :</h4>
                  <h4>{list.clinic_address}</h4>
                </div>
            </div>
            <div className="doctor-content-1"></div>
          </div>
        </div>
        <div className="container-doctor-profile-right">
          <div className="img-container">
            <img src={list.image} alt = ""></img>
          </div>
          <div className="doctor-details">
            <h1>{list.name}</h1>
            <h3>{list.specialization}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctordetails;
