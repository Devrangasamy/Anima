import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userprofile from "../../Assets/userprofile.jpg";
import userprofilebanner from "../../Assets/profile_banner.jpg";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Userprofile.css";
import { ProfileEditPage } from "./ProfileEditPage";
import {
  faPhone,
  faEnvelope,
  faSignature,
  // faHouse,
  // faCakeCandles,
  // faPerson,
} from "@fortawesome/free-solid-svg-icons";
export const Userprofile = () => {
  const [userdata, setUserdata] = useState(false);
  const [profileEditflag, setprofileEditflag] = useState(false);
  const [showprofileEditPage, setprofileEditPage] = useState([]);

  const [profileupdatealert, setprofileupdatealert] = useState(false);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/auth/${localStorage.getItem("username")}`)
      .then((data) => {
        console.log(data + "data")
        setUserdata(data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [showprofileEditPage]);
  console.log(userdata);

  const close = () => {
    setprofileEditflag(false);
  };

  const update = () => {
    setprofileupdatealert(true);
    axios
      .get(`http://127.0.0.1:8000/api/auth/${localStorage.getItem("username")}`)
      .then((data) => {
        setTimeout(() => {
          setUserdata(data.data[0]);
          setprofileupdatealert(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
    setprofileEditflag(false);
  };

  const showprofileEdit = () => {
    console.log(userdata.username);
    console.log(userdata)
    setprofileEditPage(
      <ProfileEditPage
        username={userdata.username}
        useremail={userdata.email}
        usercontact={userdata.contact}
        close={close}
        update={update}
      ></ProfileEditPage>
    );
    setprofileEditflag(true);
  };
  return (
    <div className="my-3 p-4 profile-container container">
      {profileupdatealert && (
        <div class="alert alert-success profileupdatealert" role="alert">
          This is a primary alert—check it out!
        </div>
      )}
      {profileEditflag && showprofileEditPage}
      <div className="user-profile-inner-container">
        <img
          src={userprofilebanner}
          className="user-profile-banner rounded img-fluid"
          alt="Profile banner"
        />
        <div className="usercard-conatainer card">
          <img src={userprofile} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <h1 className="card-title card-body-title">
                Profile Information
              </h1>
              <Link onClick={showprofileEdit}>Edit</Link>
            </div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faSignature} />
              </p>
              <p className="fw-normal col mx-1 card-text">
                {userdata.username}
              </p>
            </div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faPhone} />
              </p>
              <p className="fw-normal col mx-1 card-text">{userdata.contact}</p>
            </div>
            <div className="row">
              <p className="col-1">
                <FontAwesomeIcon icon={faEnvelope} />
              </p>
              <p className="fw-normal col mx-1 card-text">{userdata.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-details-conatiner my-5">
        <div>
          <button className="btn btn-light">Addtionl details</button>
        </div>
        <div className="additional-details my-4 p-3 rounded">
          <div className="row">
            <p className="col-6">Birthday</p>
            <p className="fw-normal col-6">Birthday</p>
          </div>
          <div className="row">
            <p className="col-6">Gender</p>
            <p className="fw-normal col-6">Gender</p>
          </div>
          <div className="row">
            <p className="col-6">Address</p>
            <p className="fw-normal col-6">Address</p>
          </div>
        </div>
      </div>
    </div>
  );
};
/* <div className="container mt-5">
      <div class="row mb-5 gap-5">
        <div className="col-sm-6 col-lg-5">
          <img
            src={userprofile}
            className="rounded img-fluid"
            alt="userprofile"
          />
        </div>
        <div className="col-sm-6 col-lg-7 px-sm-5 mt-5 m-sm-0 userprofile">
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
            <div className="row gap-5 mt-4">
              <button
                className="btn btn-secondary  col-md-4 col-lg-3"
                onClick={() => {
                  localStorage.removeItem("username");
                  navigate("/");
                }}
              >
                Logout
              </button>
              <Link
                className="btn btn-secondary col-md-4 col-lg-3"
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
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/petregisteration");
              }}
            >
              Rgister
            </button>
          </div>
        </div>
      </div>
    </div> */
