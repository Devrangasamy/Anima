import React, { useEffect, useState } from "react";
// import { upperCase } from "upper-case";
import axios from "axios";
import pet from "../../Assets/pet1.jpg";
const Petdetail = ({ petID }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rich-gray-macaw-sock.cyclic.app/api/petregister/${petID}`)
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(data.vaccinations);
  console.log(data);
  return (
    <div>
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
      <div className="my-5">
        <h1 className="mb-3">Health Concerns</h1>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Allergies</td>
              <td>{data.allergies}</td>
            </tr>
            <tr>
              <td>DietaryNeeds</td>
              <td>{data.dietaryNeeds}</td>
            </tr>
            <tr>
              <td>MedicalConditions</td>
              <td>{data.medicalConditions}</td>
            </tr>
            <tr>
              <td>Medications</td>
              <td>{data.medications}</td>
            </tr>
            <tr>
              <td>RegularVet</td>
              <td>{data.regularVet}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>Immunization Histroy</h3>
        <table className="table table-striped">
          <tbody>
            {data.vaccinations &&
              data.vaccinations.map((vaccination) => (
                <tr key={vaccination._id}>
                  <td>{vaccination.name}</td>
                  <td>{vaccination.date.split("T")[0]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Petdetail;
