import React from "react";
import "./NavLink.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../Assets/unnamed.png";
import { useAuth } from "../../Utilis/Authentication";
import Profile from "../Profile/Profile";
export const Navlink = () => {
  const [close, Dropdown] = useState(false);
  const auth = useAuth()
  const isOpen = () => {
    Dropdown(!close);
    console.log("Open");
  };
  const [buttonPopup,setButtonPopup]=useState(false)

  var instyle=({isActive})=>{
    return({
      backgroundColor:isActive?"#2c003f":"",
      color:isActive?"#fff":""
    })
  }

  return (
    <div className="navcontainer">
      <div>
        <img className="logo" src={logo} alt="logo"></img>
      </div>
      <div className="navs">
        <NavLink style={instyle} to="/" className="navlink">
          Home
        </NavLink>
        
        <NavLink className="dropdownrelative" onClick={isOpen}>
          Services
          {close && (
            <div className="dropdown">
              <NavLink to="/products" className="droplink">Products</NavLink>
              <NavLink to="/details" className="droplink">Details</NavLink>
            </div>
          )}
        </NavLink>
        <NavLink style={instyle} to="/accessories" className="navlink">
          Accessories
        </NavLink>
        <NavLink style={instyle} to="/medi" className="navlink">
          Medi-Care
        </NavLink>
        {!auth.user && (
          <NavLink style={instyle} to="/signup" className="navlink">
            Sign-up
          </NavLink>
        )}
        {auth.user && (
          <NavLink  className="navlink" onClick={()=>setButtonPopup(true)}>
            profile
          </NavLink>
        )}
        <Profile trigger={buttonPopup} setTrigger={setButtonPopup}></Profile>
      </div>
    </div>
  );
};
