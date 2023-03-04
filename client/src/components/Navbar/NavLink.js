import React from "react";
import "./NavLink.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../Assets/unnamed.png";
import { useAuth } from "../../Utilis/Authentication";
export const Navlink = () => {
  const [close, Dropdown] = useState(false);
  const auth = useAuth()
  const isOpen = () => {
    Dropdown(!close);
    console.log("Open");
  };

  return (
    <div className="navcontainer">
      <div>
        <img className="logo" src={logo} alt="logo"></img>
      </div>
      <div className="navs">

        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        
        <NavLink className="dropdownrelative" onClick={isOpen}>
          Services
          {close && (
            <div className="dropdown">
              <NavLink className="droplink">Home</NavLink>
              <NavLink className="droplink">Home</NavLink>
            </div>
          )}
        </NavLink>
        <NavLink to="/accessories" className="navlink">
          Accessories
        </NavLink>
        <NavLink to="/" className="navlink">
          Medi-Care
        </NavLink>
        {!auth.user && (
          <NavLink to="/signup" className="navlink">
            Sign-up
          </NavLink>
        )}
        {auth.user && (
          <NavLink to="/profile" className="navlink">
            profile
          </NavLink>
        )}
      </div>
    </div>
  );
};
