import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import pet from "../../Assets/pet1.jpg";

const Petdetails = ({ id }) => {
  const [petdatas, setPetData] = useState([]);

  React.useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/petregister/all/${id}`)
      .then((data) => {
        setPetData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="additional-details-conatiner">
      {petdatas.map((petdata, index) => {
        return (
          <div className="d-flex gap-4 bg-light" key={index}>
            <div>
              <img
                src={pet}
                alt="petimage"
                height="330px"
                width="400px"
                className="rounded img-fluid"
              ></img>
            </div>
            <div className="flex-grow-1 p-3">
              <p>
                <span>{petdata.name}</span>
              </p>
              <p>Species : {petdata.species}</p>
              <p>Breed : {petdata.bread}</p>
              <p>Age : {petdata.age}</p>
              <p>Color : {petdata.color}</p>
              <p>Weight : {petdata.weight}</p>
              <div className="text-end">
                <Link to="/petdetail" state={{ petID: petdata._id }}>
                  details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Petdetails;
