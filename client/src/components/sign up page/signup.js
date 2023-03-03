import React, { useState } from "react";
import UseFormInp from "./use form input";
import "./signup.css";
import { useNavigate } from "react-router-dom";

function Signup(event) {
  // Declaration for the variable data
  const Navigate = useNavigate();
  const [name, name_attribute] = UseFormInp("");
  const [email_id, email_id_attribute] = UseFormInp("");
  const [phone_number, phone_number_attribute] = UseFormInp("");

  // Password variables and validation
  const [pass, setPass] = useState("");
  const [confirm_pass, SetConfirmPass] = useState("");
  const [err_pswrd, setErrPswrd] = useState(false);
  const validatePass = (event) => {
    setPass(event.target.value);
    console.log("Inside the pass validate");
    // if (pass.length < 8) setErrPswrd(true);
    // else setErrPswrd(false);
    setErrPswrd(false)
  };

  //Will be called on button pressed as sign up
  const submitData = async (event) => {
    if (pass !== confirm_pass) return alert("Passwords donot match");
    console.log(name, pass, email_id, phone_number);
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
      alert(json.status);
      Navigate("/login");
    }
    event.preventDefault();
  };
  return (
    <div className="container img">
      <form onSubmit={submitData}>
        <div className="center-contents">
          <h2 id="welcome-text-container">SIGN UP</h2>
          <br></br>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="sigin"
          {...name_attribute}
        ></input>
        <br></br>
        <input
          type="email"
          placeholder="Email ID"
          className="sigin"
          {...email_id_attribute}
        ></input>
        <br></br>
        <div id="password-status-container">
          {err_pswrd && (
            <span className="signspan">Password must contain 8 letters</span>
          )}
        </div>
        <input
          type="password"
          placeholder="PassWord"
          className="sigin"
          onChange={(event) => validatePass(event)}
          required
        ></input>
        <br></br>
        <input
          type="password"
          className="sigin"
          placeholder="Confirm PassWord"
          required
          onChange={(event) => SetConfirmPass(event.target.value)}
        ></input>
        <br></br>
        {}
        <input
          type=""
          className="sigin"
          placeholder="Phone Number"
          {...phone_number_attribute}
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
      </form>
          <button onClick={()=>Navigate("/login")}>
            Login
          </button>
    </div>
  );
}

export default Signup;
