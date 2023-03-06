import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Utilis/Authentication";
import "../sign up page/signup.css";
import { useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const location = useLocation();
  const auth = useAuth();
  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        newpassword: password,
      }),
    });
    const json = await response.json();
    if (json.status === "success") {
      auth.login(json.data[0].username);
      navigate(location.state ? location.state.path : "/", { replace: true });
    } else {
      alert("Wrong Password");
      navigate("/login");
    }
    setpassword("");
    setemail("");
  };

  return (
    <div className="signup-container">
      <form onSubmit={submit} className="signup-form">
        <div className="center-contents">
          <h2 id="welcome-text-container">Anima</h2>
        </div>
        <div className="center-contents">
          <h2 id="welcome-text-container">Login</h2>
        </div>
        <lable className="sign-label">
          UserName or Email
          <span className="required">*</span>
        </lable>
        <input
          type="email"
          placeholder="Enter email"
          className="sigin-input"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br></br>
        <lable className="sign-label">
          PassWord<span className="required">*</span>
        </lable>
        <input
          type="password"
          placeholder="Enter Password"
          className="sigin-input"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <div className="center-container">
          <button className="signupbutton" type="submit" id="sign-up-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
