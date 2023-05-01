import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import pet from "../../Assets/pet1.jpg";

const Petdetails = ({ id }) => {
  const [petdatas, setPetData] = useState([]);

  React.useEffect(() => {
    axios
      .get(`https://rich-gray-macaw-sock.cyclic.app/api/petregister/all/${id}`)
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
          <div
            className="row gap-1 bg-light my-3 pet-deatils-profile-container"
            key={index}
          >
            <div className="col-md-7 col-xl-7 d-flex justify-content-center">
              <Link to="/petdetail" state={{ petID: petdata._id }}>
                <img
                  src={pet}
                  alt="petimage"
                  className="rounded img-fluid petimage"
                ></img>
              </Link>
            </div>
            <div className="col-xl-4 text-start px-3 d-flex flex-column justify-content-center">
              <p className="display-5 pb-3">
                <span>{petdata.name}</span>
              </p>
              <p>Species : {petdata.species}</p>
              <p>Breed : {petdata.bread}</p>
              <p>Age : {petdata.age}</p>
              <p>Color : {petdata.color}</p>
              <p>Weight : {petdata.weight}</p>
              {/* <div className="text-end">details</div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Petdetails;
