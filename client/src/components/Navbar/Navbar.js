import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  console.log(dropdown);
  return (
    <>
      <nav className="navbars">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h3 className="logo-brand">Anima</h3>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menus active" : "nav-menus"}>
          <li className="nav-items">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className="nav-items"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/services" className="nav-links">
              Services
            </Link>
            {<Dropdown /> && console.log(dropdown) && console.log(<Dropdown />)}
          </li>

          <li className="nav-items">
            <Link to="/accessories" className="nav-links">
              Accessories
            </Link>
          </li>
          <li className="nav-items">
            <Link
              to="/contactus"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          {localStorage.getItem("username") && (
            <li className="nav-items">
              <Link
                className="nav-links"
                // onClick={() => setButtonPopup(true)}
                to="/profile"
              >
                Profile
              </Link>
            </li>
          )}
          {!localStorage.getItem("username") && (
            <li className="nav-items">
              <Link to="/login" className="nav-links">
                Login
              </Link>
            </li>
          )}
          {/* <Profile trigger={buttonPopup} setTrigger={setButtonPopup}></Profile> */}
          {!localStorage.getItem("username") && (
            <li className="nav-items">
              <Link to="/signup" className="nav-links">
                Sign Up
              </Link>
            </li>
          )}
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
