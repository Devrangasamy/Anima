import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Components
import "./Petregisteration.css";
import CustomHooks from "./CustomHooks";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Petregisteration = () => {
  const navigate = useNavigate();

  const [name, setName] = CustomHooks("");
  const [species, setSpecies] = CustomHooks("");
  const [breed, setBreed] = CustomHooks("");
  const [color, setColor] = CustomHooks("");
  const [weight, setWeight] = CustomHooks("");
  const [age, setAge] = CustomHooks("");
  const [gender, setGender] = CustomHooks("");
  const [medicalConditions, setMedicalConditions] = CustomHooks("");
  const [allergies, setAllergies] = CustomHooks("");
  const [medications, setMedications] = CustomHooks("");
  const [dietaryNeeds, setDietaryNeeds] = CustomHooks("");
  const [regularVet, setRegularVet] = CustomHooks("");
  const [vaccinations, setVaccinations] = useState([{ name: "", date: "" }]);

  const handleVaccinationChange = (event, index) => {
    const { name, value } = event.target;
    const newVaccinations = [...vaccinations];
    newVaccinations[index][name] = value;
    setVaccinations(newVaccinations);
  };

  const handleAddVaccination = () => {
    setVaccinations([...vaccinations, { name: "", date: "" }]);
  };

  const handleRemoveVaccination = (index) => {
    setVaccinations(vaccinations.filter((_, i) => i !== index));
  };
  const submit = (e) => {
    e.preventDefault();

    axios
      .post("https://rich-gray-macaw-sock.cyclic.app/api/petregister", {
        username: localStorage.getItem("username"),
        name,
        species,
        weight,
        age,
        gender,
        color,
        breed,
        medicalConditions,
        allergies,
        medications,
        dietaryNeeds,
        regularVet,
        vaccinations,
      })
      .then((res) => {
        alert("Your pet registered Successfully");
        setTimeout(() => navigate("/profile"), 1000);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="parent container d-flex justify-content-center align-items-center petregisteration">
        <div className="child formpet">
          <form action="/action_page.php">
            <div className="my-3">
              <label>Pet Name </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Petname"
                name="name"
                value={name}
                onChange={setName}
                required
              />
            </div>
            <div className="mb-3">
              <label>Species </label>
              <input
                type="text"
                className="form-control"
                id="species"
                placeholder="Enter Species"
                name="species"
                value={species}
                onChange={setSpecies}
              />
            </div>
            <div className="mb-3">
              <label>Breed </label>
              <input
                type="text"
                className="form-control"
                id="breed"
                placeholder="Enter breed"
                name="breed"
                value={breed}
                onChange={setBreed}
              />
            </div>
            <div className="mb-3">
              <label>Color </label>
              <input
                type="text"
                className="form-control"
                id="color"
                placeholder="Enter Color"
                name="color"
                value={color}
                onChange={setColor}
              />
            </div>
            <div className="mb-3">
              <label>Weight </label>
              <input
                type="text"
                className="form-control"
                id="weight"
                placeholder="Enter weight"
                name="weight"
                value={weight}
                onChange={setWeight}
              />
            </div>
            <div className="mb-3">
              <label>Age </label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter Age"
                name="age"
                value={age}
                onChange={setAge}
              />
            </div>
            <div className="mb-3">
              <label>Gender </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={gender}
                onChange={setGender}
              >
                <option>Open this select menu</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Medical Conditions:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Medical Conditions"
                value={medicalConditions}
                onChange={setMedicalConditions}
              />
            </div>
            <div className="mb-3">
              <label>Allergies:</label>
              <input
                className="form-control"
                type="text"
                value={allergies}
                placeholder="Enter Allergies"
                onChange={setAllergies}
              />
            </div>
            <div className="mb-3">
              <label className="">Medications:</label>
              <input
                className="form-control"
                type="text"
                value={medications}
                placeholder="Enter Medications"
                onChange={setMedications}
              />
            </div>
            <div className="mb-3">
              <label className="">Dietary Needs:</label>
              <input
                className="form-control"
                type="text"
                value={dietaryNeeds}
                placeholder="Enter Dietary Need"
                onChange={setDietaryNeeds}
              />
            </div>
            <div className="mb-3">
              <label className="form-check-label">Regular Veterinarian:</label>
              <input
                className="form-control"
                type="text"
                value={regularVet}
                placeholder="Enter Regular Veterinarian"
                onChange={setRegularVet}
              />
            </div>

            <div className="mb-3">
              <h3 className="mb-2">Vaccination details</h3>
              {vaccinations.map((vaccination, index) => (
                <div key={index} className="row align-items-center">
                  <div className="mb-3 col-8 col-sm-6">
                    <label className="">Vaccine Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Vaccination Name"
                      value={vaccination.name}
                      onChange={(event) =>
                        handleVaccinationChange(event, index)
                      }
                      required
                    />
                  </div>
                  <div className="mb-3 col-8 col-sm-5">
                    <label className="">Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="date"
                      placeholder="Vaccination Date"
                      value={vaccination.date}
                      onChange={(event) =>
                        handleVaccinationChange(event, index)
                      }
                      required
                    />
                  </div>

                  <button
                    type="button"
                    className="col btn btn-primary"
                    onClick={() => handleRemoveVaccination(index)}
                    style={{ height: "40px" }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddVaccination}
                className="btn btn-primary"
              >
                Add Vaccination
              </button>
            </div>

            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
