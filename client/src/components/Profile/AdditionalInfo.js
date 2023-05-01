import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// components
import AdditionalInfoEditpopoup from "./AdditionalInfoEditpopoup";

const AdditionalInfo = (props) => {
  const { userdata, setUserdata } = props;
  const [showAdditionalInfopopupflag, setAddtionalInfopopupflag] =
    useState(false);

  const handlechange = () => {
    setAddtionalInfopopupflag(true);
  };

  const closeUpdateForm = () => {
    setAddtionalInfopopupflag(false);
  };

  const update = () => {
    setAddtionalInfopopupflag(false);
    axios
      .get(
        `https://rich-gray-macaw-sock.cyclic.app/api/auth/name/${localStorage.getItem(
          "username"
        )}`
      )
      .then((data) => {
        setTimeout(() => {
          setUserdata(data.data);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="additional-details-conatiner">
      {/* <div>
        <button className="btn btn-light">Additional details</button>
      </div> */}
      <div className="additional-details my-4 p-3 rounded">
        <div className="d-flex justify-content-between mb-4">
          <h1 className="card-title card-body-title">Additional Information</h1>
          <Link variant="primary" onClick={handlechange}>
            Edit
          </Link>
        </div>
        <div className="row">
          <p className="col-6">Birthday</p>
          <p className="fw-normal col-6">{userdata.birthday}</p>
        </div>
        <div className="row">
          <p className="col-6">Gender</p>
          <p className="fw-normal col-6">{userdata.gender}</p>
        </div>
        <div className="row">
          <p className="col-6">Address</p>
          <p className="fw-normal col-6">{userdata.address}</p>
        </div>
      </div>
      {showAdditionalInfopopupflag && (
        <AdditionalInfoEditpopoup
          handleShow={true}
          birthday={userdata.birthday}
          address={userdata.address}
          gender={userdata.gender}
          update={update}
          close={closeUpdateForm}
        />
      )}
    </div>
  );
};

export default AdditionalInfo;
