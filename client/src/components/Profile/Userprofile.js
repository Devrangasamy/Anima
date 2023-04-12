import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userprofile from "../../Assets/userprofile.jpg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Userprofile.css";
import {
  faPhone,
  faEnvelope,
  faSignature,
  faHouse,
  faCakeCandles,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
export const Userprofile = () => {
  const [userdata, setUserdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/auth/${localStorage.getItem("username")}`)
      .then((data) => {
        setUserdata(data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(userdata);
  return (
    <div className="container mt-5">
      <div class="row mb-5">
        <div className="col-sm-6 col-lg-5">
          <img
            src={userprofile}
            className="rounded img-fluid"
            alt="userprofile"
          />
        </div>
        <div className="col-sm-6 col-lg-7 px-sm-5 mt-5 m-sm-0">
          <h1 className="text-success mb-4">PROFILE</h1>
          <div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faSignature} />
              </p>
              <p className="fw-normal col mx-1">{userdata.username}</p>
            </div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faPhone} />
              </p>
              <p className="fw-normal col mx-1">{userdata.contact}</p>
            </div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faEnvelope} />
              </p>
              <p className="fw-normal col mx-1">{userdata.email}</p>
            </div>
            <div className="row gap-3">
              <button
                className="btn btn-secondary col-md-4 col-lg-2 gap"
                onClick={() => {
                  localStorage.removeItem("username");
                  navigate("/");
                }}
              >
                Logout
              </button>
              <Link
                className="btn btn-secondary col-md-4 col-lg-2"
                to="/userupdate"
                state={{
                  name: userdata.username,
                  email: userdata.email,
                  contact: userdata.contact,
                }}
              >
                Edit
              </Link>
            </div>
          </div>
          {/* <button class="btn btn-success register">Rgister</button> */}
        </div>
      </div>
      <div class="row mb-5">
        <div className="col-sm-6">
          <h1 className="text-success mb-4">CONTACT</h1>
          <div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faPhone} />
              </p>
              <p className="fw-normal col">{userdata.contact}</p>
            </div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faEnvelope} />
              </p>
              <p className="fw-normal col">{userdata.email}</p>
            </div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faHouse} />
              </p>
              <p className="fw-normal col">Address</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <h1 className="text-success mb-4">BASIC DETAILS</h1>
          <div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faCakeCandles} />
              </p>
              <p className="fw-normal col">Birthday</p>
            </div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faPerson} />
              </p>
              <p className="fw-normal col">Gender</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-success p-5 petregistercontainer rounded">
        <div>
          <p className="text-light">
            Welcome to our pet store website, where you can find everything you
            need for your furry friends!
          </p>
          <p className="text-light pb-3">
            From food and toys to grooming and veterinary services, our website
            has everything you need to keep your pet happy and healthy Register
            your pet now.
          </p>
          <div className="registerbtn">
            <button className="btn btn-primary ">Rgister</button>
          </div>
        </div>
      </div>
    </div>
  );
};
