import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  console.log("sdfg");
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menus clicked" : "dropdown-menus"}
      >
        {MenuItems.map((item, index) => {
          console.log(item);
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
