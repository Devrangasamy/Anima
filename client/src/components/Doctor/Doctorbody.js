import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { FiMail } from "react-icons/fa";
import "./Doctorbody.css";
export const Doctorbody = () => {
  const [datalist, setDatalist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/doctor/")
      .then((response) => {
        setDatalist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(datalist);

  const lists = datalist.map((list) => (
    <NavLink to={`${list.id}`} style={{ textDecoration: "none" }}>
      <div key={list.id} className="doctor-container">
        <div>
          <div className="doctor-details-container">
            <div className="personaldetails-container">
              <h1 className="doctor-name">{list.name}</h1>
              <p className="doctor-speciailzation">{list.specialization}</p>
            </div>
            <div className="personaldetails-container">
              <div className="grid-2 inside-personal">
                <p className="doctor-features">Experience</p>
                <p>{list.years_of_experience}</p>
              </div>

              <div className="grid-2 inside-personal">
                <p className="doctor-features">Language</p>
                <div className="grid-2">
                  {list.languages_spoken.map((language) => (
                    <p>{language}</p>
                  ))}
                </div>
              </div>

              <div className="grid-2 inside-personal">
                <p className="doctor-features">Certifications</p>
                <div className="grid-2">
                  {list.certifications.map((certification) => (
                    <p>{certification}</p>
                  ))}
                </div>
              </div>

              <div className="grid-2 inside-personal">
                <p className="doctor-features">Services</p>
                <div className="grid-2">
                  {list.services_provided.map((services) => (
                    <p>{services}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="doc-address">
            <address className="doc-address">
              <div>
                <p>{list.clinic_address}</p>
              </div>
              <div>
                <p>{list.phone_number}</p>
              </div>
              <div>
                <p>{list.email}</p>
              </div>
            </address>
          </div>
        </div>
        <div className="doctor-image-container">
          <img className="doctor-image" src={list.image} alt="doctor"></img>
        </div>
      </div>
    </NavLink>
  ));

  return <div>{lists}</div>;
};
