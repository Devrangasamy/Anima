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
    <div className="doctor-container">
      <div className="doctor-details-container">
        <div className="personaldetails-container">
          <h1 className="doctor-name">{list.name}</h1>
          <p className="doctor-speciailzation">{list.name}</p>
        </div>
        <div>

        <div className="personaldetails-container">
          <div>
          <p className="doctor-features">Experience</p>
          <p>{list.years_of_experience}</p>

          </div>
          <div >

          <p className="doctor-features">language</p>
          <div>
          {list.languages_spoken.map((language) => (
              <p>{language}</p>
              ))}
              </div>
        </div>
        <div>
          <p classNmae="doctor-features">certifications</p>
          <div>

          {list.certifications.map((certification) => (
            
            <p>{certification}</p>
            
            ))}
            </div>
        </div>
        <div>
          <p className="heading">certifications</p>
          <div>
            
          {list.services_provided.map((services) => (
            
            <p>{services}</p>
            
            ))}
            </div>
        </div>
        </div>
          </div>
        <div className="personaldetails-container">
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
      </div>
      <div className="doctor-image-container">
        <img src={list.image} alt="doctor"></img>
      </div>
    </div>
  ));

  return <div>{lists}</div>;
};
