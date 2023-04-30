import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
import placeholder from "../../Assets/profile-picture-placeholder.png";

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
      {/* <nav className="navbars">
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

          {!localStorage.getItem("username") && (
            <li className="nav-items">
              <Link to="/signup" className="nav-links">
                Sign Up
              </Link>
            </li>
          )}
        </ul>
      </nav> */}

      <nav class="navbar navbar-expand-sm navbar-dark px-5">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Anima
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav gap-md-4">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/doctor">
                      Doctor
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/products">
                      Products
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/accessories">
                  Accessories
                </Link>
              </li>
              {/* Login Signup */}
              {!localStorage.getItem("username") && (
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}

              {!localStorage.getItem("username") && (
                <li class="nav-item">
                  <Link class="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              )}

              {/*Profile  */}
              {localStorage.getItem("username") && (
                <li className="d-flex gap-1">
                  <img
                    src={placeholder}
                    className="profile-Placeholder-img"
                    alt="placeHolder"
                  />
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      {localStorage.getItem("username")}
                    </Link>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" onClick={logoutuser}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
