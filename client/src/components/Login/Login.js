import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAuth } from "../../Utilis/Authentication";
import { useLocation, useNavigate } from "react-router-dom";
import "../sign up page/signup.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const location = useLocation();
  const auth = useAuth();
  const [noMatch, setNoMatch] = useState(false)
  // This is for the password visibility
  const [showPass, setShowPass] = useState(false)
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
      localStorage.setItem("username", json.data[0].username);
      navigate(location.state ? location.state.path : "/", { replace: true });
      setpassword("");
      setemail("");
    }
    else {
      setNoMatch(true)
      navigate("/login");
    }
  };
  const forgotPassword = () => {
    navigate('/forgetpassword')
  }

  return (
    <form className="signup-container" onSubmit={(e) => submit(e)}>
      <div className="signup-form">
        <div className="center-contents">
          <h2 id="welcome-text-container">Anima</h2>
        </div>
        <div className="center-contents">
          <h2 id="welcome-text-container">Login</h2>
        </div>
        <label className="sign-label">UserName or Email<span className="required">*</span></label>
        <input type="email" placeholder="Enter email" className="sigin-input-name" value={email} onChange={(e) => { setemail(e.target.value); setNoMatch(false) }} />
        <br></br>
        <label className="sign-label">PassWord<span className="required">*</span></label>
        {/* <input  value = {passwordLogin} onChange={(e) => {setpasswordLogin(e.target.value)}}></input> */}
        <div className="signin-input-password-div-container">
          <input className="sigin-input" value={password} onChange={(e) => { setpassword(e.target.value); setNoMatch(false) }} type = {showPass ? 'text' : 'password'} placeholder="Enter Password" autoComplete="off"></input>
          <button type='button' onClick={() => { setShowPass(!showPass) }}>{showPass ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</button>
        </div>
        {noMatch && <>
          <div className="login-page-mismatch-password center-container"><span>Mismatch in username and password</span></div>
        </>}
        {/* This is the code to use the google login in the page */}
        <div className="center-container">
          <button type='buttono' onClick={() => forgotPassword()} className='signupbutton'>Forgot Password</button>
          <button className="signupbutton" id="sign-up-button" type = 'submit'>Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;

