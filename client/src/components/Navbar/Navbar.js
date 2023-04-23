import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Navbar.css";

function Navbar() {
  const navigates = useNavigate();
  const [click, setClick] = useState(false);
  const [drop, setdrop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 100) {
      setdrop(false);
    } else {
      setdrop(true);
    }
  };
  const logoutuser = () => {
    localStorage.removeItem("username");
    navigates("/");
    setIsOpen(!isOpen);
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 100) {
      setdrop(true);
    } else {
      setdrop(false);
    }
  };
  const [showProfileDrop, setShowProfileDrop] = useState(false);
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
            <Link
              to="/services"
              className="nav-links"
              style={{ paddingLeft: 30 }}
            >
              Services
            </Link>
            {drop && <Dropdown className="navbar-services-popup" />}
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
            <li
              className="nav-items"
              onMouseEnter={() => {
                setShowProfileDrop(true);
              }}
              onMouseLeave={() => {
                setShowProfileDrop(false);
              }}
            >
              <Link
                className="nav-links"
                // to="/profile"
              >
                Profile
              </Link>
              {showProfileDrop && (
                <div
                  className="popup-profile rounded"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                  }}
                >
                  <div className="popup-content d-grid">
                    <Link
                      to="/profile"
                      className="text-decoration-none text-center border-bottom p-3 te1"
                    >
                      Profile
                    </Link>
                    <Link
                      onClick={logoutuser}
                      to="/"
                      className="text-decoration-none text-center p-3 te1"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              )}
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
