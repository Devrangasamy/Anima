import React, { useState } from "react";
import UseFormInp from "./use form input";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function Signup(event) {
  // Declaration for the variable data
  const Navigate = useNavigate();
  const [name, name_attribute] = UseFormInp("");
  const [email_id, email_id_attribute] = UseFormInp("");
  const [phone_number, button] = UseFormInp("");

  // Password variables and validation
  const [pass, setPass] = useState("");
  const [confirm_pass, SetConfirmPass] = useState("");
  const [err_pswrd, setErrPswrd] = useState(false);

  // Password visibility
  const[showPass, setShowPass] = useState(true)
  const validatePass = (event) => {
    setPass(event.target.value);
    console.log("Inside the pass validate");
    // if (pass.length < 8) setErrPswrd(true);
    // else setErrPswrd(false);
    setErrPswrd(false);
  };

  //Will be called on button pressed as sign up
  const submitData = async (event) => {
    if (pass !== confirm_pass) return alert("Passwords donot match");
    console.log(name, pass, email_id, phone_number);
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/auth/register", {
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
    }
    else{
      console.log("cvbn");
    }
  };
  return (
    <div className="signup-container img">
      <div onSubmit={submitData} className="signup-form">
        {/* <div className="center-contents">
          <h2 id="welcome-text-container">Anima</h2>
        </div> */}
        <div className="center-contents">
          <h2 id="welcome-text-container">SIGN UP</h2>
        </div>
        <lable className="sign-label">
          Full Name
          <span className="required">*</span>
        </lable>
        <input
          type="text"
          placeholder="Name"
          className="sigin-input-name"
          {...name_attribute}
        ></input>
        <br></br>
        <lable className="sign-label">
          Email<span className="required">*</span>
        </lable>
        <input
          type="email"
          placeholder="Email ID"
          className="sigin-input-name"
          {...email_id_attribute}
        ></input>
        <br></br>
        <div id="password-status-container">
          {err_pswrd && (
            <span className="signspan">Password must contain 8 letters</span>
          )}
        </div>
        <lable className="sign-label">
          PassWord<span className="required">*</span>
        </lable>
        <div className="signin-input-password-div-container">
          <input type={showPass ? "text" : 'password'} placeholder="PassWord" className="sigin-input-name" onChange={(event) => validatePass(event)} required ></input>
          <button onClick = {() => {setShowPass(!showPass);}}>{showPass ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon = {faEyeSlash}/>}</button>
        </div>
        <lable className="sign-label">Confrim-Password<span className="required">*</span>
        </lable>
        <div className="signin-input-password-div-container">
          <input type={showPass ? "text" : 'password'} className="sigin-input-name" placeholder="Confirm PassWord" required onChange={(event) => SetConfirmPass(event.target.value)}></input>
          <button onClick = {() => {setShowPass(!showPass);}}>{showPass ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon = {faEyeSlash}/>}</button>
        </div>
        <lable className="sign-label">
          Mobile Number<span className="required">*</span>
        </lable>
        <input type="number" className="sigin-input-name" placeholder="Phone Number" {...button} required></input>
        <br></br>
        <div className="center-container">
          <button className="signupbutton" type="submit" id="sign-up-button">Sign Up</button>
          <button className="signupbutton" type="reset" id="reset-button">Reset</button>
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
  );
}

export default Signup;
