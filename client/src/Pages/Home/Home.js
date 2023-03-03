import React from "react";
import "./Home.css";
import pet1 from "../Assets/pet1.jpg";
import pet2 from "../Assets/pet2.jpg";
import pet3 from "../Assets/pet3.jpg";
import pet4 from "../Assets/pet4.jpg";
import pet5 from "../Assets/pet5.jpg";
import next from "../Assets/next.jpg";
import slide2image from "../Assets/Slide2home.jpg";
import { Navlink } from "./Navlink";
export const Home = () => {
  return (
    <div className="home">
      <Navlink></Navlink>
      <div className="slide ">
        <div className="slide1">
          <h1 className="quotes">Loving sitters take care of your pet</h1>
          <p className="care">
            Our facility provides professional care-giving in a clean safe and
            home-like environment for your pet
          </p>
          <p className="imagequotes">
            <span>We can take care of your :</span>
          </p>
          <div className="pets">
            <img src={pet1} alt="pet1"></img>
            <img src={pet2} alt="pet2"></img>
            <img src={pet3} alt="pet3"></img>
            <img src={pet4} alt="pet4"></img>
            <img src={pet5} alt="pet5"></img>
            <img className="next" src={next} alt="pet5"></img>
          </div>
        </div>
        <div className="slide2">
          <img className="main-image" src={slide2image} alt="pet5"></img>
        </div>
      </div>
    </div>
  );
};
