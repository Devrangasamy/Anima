import axios from "axios";
import React, { useEffect, useState } from "react";
// import { FiMail } from "react-icons/fa";
import './Doctorbody.css'
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
  console.log(datalist);
  const lists = datalist.map((list) => (
    <div>
      <div className="doctor-container">
        <h1>{list.name}</h1>
        <p>{list.name}</p>
        <p>Experience {list.years_of_experience}</p>
        <div>
          Languages
          {list.languages_spoken.map((language) => (
            <React.Fragment>
              <p>{language}</p>
            </React.Fragment>
          ))}
        </div>
        <div>
          certifications
          {list.certifications.map((certification) => (
            <React.Fragment>
              <p>{certification}</p>
            </React.Fragment>
          ))}
        </div>
        <div>
          Services
          {list.services_provided.map((services) => (
            <React.Fragment>
              <p>{services}</p>
            </React.Fragment>
          ))}
        </div>
        <address>
          <div>
            <i class="fa-solid fa-house"></i>
            <p>{list.clinic_address}</p>
          </div>
          <div>
            <i class="fa-solid fa-phone"></i>
            <p>{list.phone_number}</p>
          </div>
          <div>
            <p>{list.email}</p>
          </div>
        </address>
      </div>
      <div>
        <img src={list.image} alt="doctor"></img>
      </div>
    </div>
  ));

  return <div>{lists}</div>;
};
