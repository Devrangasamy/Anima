import React, { useState } from "react";
import UseFormInp from "./use form input";
import "./signup.css";
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={submitData} className="signup-form">
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
          className="sigin-input"
          {...name_attribute}
        ></input>
        <br></br>
        <lable className="sign-label">
          Email<span className="required">*</span>
        </lable>
        <input
          type="email"
          placeholder="Email ID"
          className="sigin-input"
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
        <input
          type="password"
          placeholder="PassWord"
          className="sigin-input"
          onChange={(event) => validatePass(event)}
          required
        ></input>
        <br></br>
        <lable className="sign-label">
          Confrim-Password<span className="required">*</span>
        </lable>
        <input
          type="password"
          className="sigin-input"
          placeholder="Confirm PassWord"
          required
          onChange={(event) => SetConfirmPass(event.target.value)}
        ></input>
        <br></br>
        <lable className="sign-label">
          Mobile Number<span className="required">*</span>
        </lable>
        <input
          type="number"
          className="sigin-input"
          placeholder="Phone Number"
          {...button}
          required
        ></input>
        <br></br>
        <div className="center-container">
          <button className="signupbutton" type="submit" id="sign-up-button">
            Sign Up
          </button>
          <button className="signupbutton" type="reset" id="reset-button">
            Reset
          </button>
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
      </form>
    </div>
  );
}

export default Signup;
