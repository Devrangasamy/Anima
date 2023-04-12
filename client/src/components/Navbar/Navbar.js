import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

// import logo from "../../Assets/Logo.png";
// import Profile from "../Profiletemp/Profile";
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const instyle = ({ isActive }) => {
  //   return {
  //     color: isActive ? "#fff" : "",
  //     backgroundColor: isActive ? "#411a52" : "",
  //   };
  // };

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
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h3 className="logo-brand">Anima</h3>
          {/* <i className="fab fa-firstdraft" /> */}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              // style={instyle}
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>

          <li
            // style={instyle}
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              // onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link
              to="/accessories"
              className="nav-links"
              // onClick={closeMobileMenu}
            >
              Accessories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Medi-Care
            </Link>
          </li>
          {localStorage.getItem("username") && (
            <li className="nav-item">
              <Link
                className="nav-links"
                // onClick={closeMobileMenu}
                // onClick={() => setButtonPopup(true)}
                to="/profile"
              >
                Profile
              </Link>
            </li>
          )}
          {!localStorage.getItem("username") && (
            <li className="nav-item">
              <Link to="/login" className="nav-links">
                Login
              </Link>
            </li>
          )}
          {/* <Profile trigger={buttonPopup} setTrigger={setButtonPopup}></Profile> */}
          {!localStorage.getItem("username") && (
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-links"
                // onClick={closeMobileMenu}
              >
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
