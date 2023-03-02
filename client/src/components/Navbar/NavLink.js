import React, { useState } from "react";
import "./NavLink.css";
import { NavLink } from "react-router-dom";
export const Navlink = () => {
  const [close, Dropdown] = useState(false);
  const isOpen = () => {
    Dropdown(!close);
    console.log("Open");
  };
  return (
    <div className="navcontainer">
      <div className="logo">Logo</div>
      <div className="navs">
        <NavLink  className="navlink">
          Home
        </NavLink>
        <NavLink to="/" className="navlink dropdownrelative" onClick={isOpen}>
          Services
          {close && (
            <ol className="dropdown">
              {/* <ul> */}
                <NavLink className="navlin">
                  Home
                </NavLink>
              {/* </ul> */}
              
              {/* <ul> */}
                <NavLink className="navlin">
                  Home
                </NavLink>
              {/* </ul> */}
             
            </ol>
          )}
        </NavLink>
        <NavLink  className="navlink">
          Training
        </NavLink>
        <NavLink className="navlink">
          Medi-Care
        </NavLink>
        {/* <button></button> */}
      </div>
    </div>
  );
};
