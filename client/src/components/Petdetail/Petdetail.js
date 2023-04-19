import React, { useEffect, useState } from "react";
import { upperCase } from "upper-case";
import axios from "axios";
import pet from "../../Assets/pet1.jpg";
const Petdetail = ({ petID }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/petregister/${petID}`)
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <div className="row gap-4">
      <div className="col-md-5">
        <img src={pet} alt="petimage" className="img-fluid rounded" />
      </div>
      <div className="col-md-6">
        <h2 className="mb-4">{data.name}</h2>
        <p>
          <strong>Species:</strong> {data.species}
        </p>
        <p>
          <strong>Breed:</strong> {data.breed}
        </p>
        <p>
          <strong>Age:</strong> {data.age}
        </p>
        <p>
          <strong>Color:</strong> {data.color}
        </p>
        <p>
          <strong>Weight:</strong> {data.weight}
        </p>
      </div>
    </div>
  );
};

export default Petdetail;
