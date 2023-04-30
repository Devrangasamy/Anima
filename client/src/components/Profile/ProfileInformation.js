import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Components
import userprofile from "../../Assets/userprofile.jpg";
import ProfileInformationEditPopup from "./ProfileInformationEditPopup";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

export const ProfileInformation = (props) => {
  const { userdata, setUserdata, setprofileupdatealert } = props;
  const [showFormflag, setShowFormflag] = useState(false);

  const close = () => {
    setShowFormflag(false);
  };

  const handleShowForm = () => {
    setShowFormflag(true);
  };

  const updatedata = () => {
    setShowFormflag(false);
    setprofileupdatealert(true);
    axios
      .get(
        `https://rich-gray-macaw-sock.cyclic.app/api/auth/name/${localStorage.getItem(
          "username"
        )}`
      )
      .then((data) => {
        setTimeout(() => {
          setUserdata(data.data);
          setprofileupdatealert(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="usercard-conatainer card">
      {userdata.image === "" || userdata.image == null ? (
        <img src={userprofile} className="card-img-top" alt="..." />
      ) : (
        <img src={userdata.imageurl} className="card-img-top" alt="..." />
      )}
      <div className="card-body">
        <div className="d-flex justify-content-between mb-2">
          <h1 className="card-title card-body-title">Profile Information</h1>
          <Link variant="primary" onClick={handleShowForm}>
            Edit
          </Link>
        </div>
        <div className="row">
          <p className="col-1">
            <FontAwesomeIcon icon={faSignature} />
          </p>

          <p className="fw-normal col mx-1 card-text">{userdata.username}</p>
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
      {showFormflag && (
        <ProfileInformationEditPopup
          handleShow={true}
          username={userdata.username}
          useremail={userdata.email}
          usercontact={userdata.contact}
          update={updatedata}
          close={close}
        />
      )}
    </div>
  );
};
