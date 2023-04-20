import React from "react";
import axios from "axios";
// Components
import "./Petregisteration.css";
import CustomHooks from "./CustomHooks";
import Navbar from "../Navbar/Navbar";

export const Petregisteration = () => {
  const [name, setName] = CustomHooks("");
  const [species, setSpecies] = CustomHooks("");
  const [breed, setBreed] = CustomHooks("");
  const [color, setColor] = CustomHooks("");
  const [weight, setWeight] = CustomHooks("");
  const [age, setAge] = CustomHooks("");
  const [gender, setGender] = CustomHooks("");

  const submit = (e) => {
    e.preventDefault();
    console.log(name, species, weight, age, gender, color, breed);
    axios
      .post("http://127.0.0.1:8000/api/petregister", {
        username: localStorage.getItem("username"),
        name,
        species,
        weight,
        age,
        gender,
        color,
        breed,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
