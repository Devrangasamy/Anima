import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Utilis/Authentication';
import "../sign up page/signup.css"
import { useLocation } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const location=useLocation()
    const auth = useAuth()
    const submit=async (e)=>{
        e.preventDefault();
        const response = await fetch(
            "http://localhost:8000/api/auth/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: email,
                newpassword:password
              }),
            });
            const json = await response.json();
            if(json.status==="success")
            {
                auth.login(json.data[0].username)
                navigate(location.state?location.state.path:"/",{replace:true});
            }
            else
            {
                alert("Wrong Password");
                navigate("/login");
            }
            setpassword("")
            setemail("")
    }
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="center-contents">
          <h2 id="welcome-text-container">Login</h2>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder="Enter email"
          className="sigin"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Enter Password"
          className="sigin"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br></br>
        <button className="signupbutton" type="submit" id="sign-up-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login