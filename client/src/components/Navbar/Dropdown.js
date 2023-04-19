import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { MenuItems } from "./MenuItems";
const Dropdown = () => {
  return (
    <>
      <ul className="dropdownTotalContents">
        {MenuItems.map((item, index) => (
          <div key={index} className="dropdown-menubar">
            <li className = 'dropdown-litags centerContents'>
              <Link className="dropdown-link" to={item.path}>{item.title}</Link>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
