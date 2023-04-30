import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupUsingGoogle } from "../SignupUsingGoogle";
import "./signup.css";
import UseFormInp from "../use form input";
import Navbar from "../../Navbar/Navbar";

function Signup(event) {
  // Declaration for the variable data
  const Navigate = useNavigate();
  const [name, name_attribute, resetName] = UseFormInp("");
  const [email_id, email_id_attribute, resetEmailID] = UseFormInp("");
  const [phone_number, button, resetPhoneNumber] = UseFormInp("");

  // Password variables and validation
  const [pass, setPass] = useState("");
  const [confirm_pass, SetConfirmPass] = useState("");
  const [err_pswrd, setErrPswrd] = useState(false);

  // Password visibility
  const [showPass, setShowPass] = useState(false);

  const validatePass = (event) => {
    setPass(event.target.value);
    // if (pass.length < 8) setErrPswrd(true);
    // else setErrPswrd(false);
    setErrPswrd(false);
  };
  const resetData = () => {
    resetName();
    resetEmailID();
    setPass("");
    SetConfirmPass("");
    resetPhoneNumber();
  };

  //Will be called on button pressed as sign up
  const submitData = async (event) => {
    if (pass !== confirm_pass) return alert("Passwords donot match");
    event.preventDefault();
    const response = await fetch("https://rich-gray-macaw-sock.cyclic.app/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        email: email_id,
        newpassword: pass,
        confirmpassword: confirm_pass,
        contact: phone_number,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.status === "success") {
      Navigate("/login");
    } else {
      console.log("Could not connnect to the database");
    }
    resetData();
  };
  return (<>
      <Navbar/>
    <div className="signup-container img">
      <div onSubmit={submitData} className="signup-form">
        {/* <div className="center-contents">
          <h2 id="welcome-text-container">Anima</h2>
        </div> */}
        <div className="center-contents">
          <h2 id="welcome-text-container">SIGN UP</h2>
        </div>
        <label className="sign-label">
          Full Name
          <span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="sigin-input-name"
          value={name}
          {...name_attribute}
        ></input>
        <br></br>
        <label className="sign-label">
          Email<span className="required">*</span>
        </label>
        <input
          type="email"
          placeholder="Email ID"
          value={email_id}
          className="sigin-input-name"
          {...email_id_attribute}
        ></input>
        <br></br>
        <div id="password-status-container">
          {err_pswrd && (
            <span className="signspan">Password must contain 8 letters</span>
          )}
        </div>
        <label className="sign-label">
          PassWord<span className="required">*</span>
        </label>
        <div className="signin-input-password-div-container">
          <input
            type={showPass ? "text" : "password"}
            placeholder="PassWord"
            className="sigin-input-name"
            onChange={(event) => validatePass(event)}
            required
          ></input>
          <button
            onClick={() => {
              setShowPass(!showPass);
            }}
          >
            {showPass ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </button>
        </div>
        <label className="sign-label">
          Confrim-Password<span className="required">*</span>
        </label>
        <div className="signin-input-password-div-container">
          <input
            type={showPass ? "text" : "password"}
            className="sigin-input-name"
            placeholder="Confirm PassWord"
            required
            onChange={(event) => SetConfirmPass(event.target.value)}
          ></input>
          <button
            onClick={() => {
              setShowPass(!showPass);
            }}
          >
            {showPass ? (
              <FontAwesomeIcon  icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} size="xs" />
            )}
          </button>
        </div>
        <label className="sign-label">
          Mobile Number<span className="required">*</span>
        </label>
        <input
          type="number"
          className="sigin-input-name"
          placeholder="Phone Number"
          value={phone_number}
          {...button}
          required
        ></input>
        <br></br>
        <div className="center-container">
          <button
            className="signupbutton"
            onClick={submitData}
            id="sign-up-button"
          >
            Sign Up
          </button>
          <button
            className="signupbutton"
            onClick={() => resetData()}
            id="reset-button"
          >
            Reset
          </button>
        </div>
        <div className="center-container">
          <SignupUsingGoogle />
        </div>
        <hr className="Already-signup"></hr>
        <div className="Already-signup-container">
          <p className="Already-signup-para">Already have an Account?</p>
          <button
            className="Already-signup-button"
            onClick={() => Navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;
