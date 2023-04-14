import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import AdditionalInfoEditpopoup from "./AdditionalInfoEditpopoup";

const AdditionalInfo = (props) => {
  const { userdata } = props;
  const [showAdditionalInfopopupflag, setAddtionalInfopopupflag]=useState(false);
    const [showAdditionalInfopopup, setAddtionalInfopopup]=useState([]);
  const handlechange = () => {
    setAddtionalInfopopupflag(true);
    setAddtionalInfopopup(<AdditionalInfoEditpopoup show={true} />)
  };

  axios
      .get(
        `http://127.0.0.1:8000/api/auth/name/${localStorage.getItem(
          "username"
        )}`
      )
      .then((data) => {
        setTimeout(() => {
          setUserdata(data.data[0]);
          setprofileupdatealert(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="additional-details-conatiner my-5">
      <div>
        <button className="btn btn-light">Addtionl details</button>
      </div>
      <div className="additional-details my-4 p-3 rounded">
        <div className="d-flex justify-content-between mb-4">
          <h1 className="card-title card-body-title">Profile Information</h1>
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
      {showAdditionalInfopopupflag && showAdditionalInfopopup}
    </div>
  );
};

export default AdditionalInfo;
