import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGoogleContext } from "../../Utilis/GoogleAuthendication";
import "./GetPasswordAndUpdate.css";

export const GetPasswordAndUpdate = () => {
  const navigate = useNavigate();
  // Get the crendential from the google login
  const googleAuth = useGoogleContext();
  // password show and hide flags
  const [showpass, setShowpass] = useState(false);
  // Password mismatch error flag
  const [mismatchPassword, setMissmatchPassword] = useState(false);
  // Get the password and store in the states
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  // To store the data from the google credential
  const [data, setData] = useState([]);

  // Data to redirect
  const [alreadyUser, setAlreadyUser] = useState(false);
  const [count, setCount] = useState(5);

  useEffect(() => {
    let responseFromAxios;
    let dataa = jwt_decode(googleAuth.credential);
    axios
      .get(`https://rich-gray-macaw-sock.cyclic.app/api/auth/:${dataa.email}`)
      .then((response) => {
        setData(response);
        if (response.data.length > 0) {
          setAlreadyUser(true);
        }
      })
      .catch((error) => console.log(error));
    console.log(responseFromAxios);
  }, [googleAuth.credential]);

  useEffect(() => {
    if (data.length > 0) {
      setAlreadyUser(true);
    }
  });

  const timer = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    if (alreadyUser === true) {
      const interval = setInterval(timer, 1000);
      if (count < 1) navigate("/login");
      return () => clearInterval(interval);
    }
  }, [alreadyUser, count]);

  const submitAndValidate = (e) => {
    e.preventDefault();
    // This part needs to be completed for the password correction
    console.log(data.length > 0);

    if (data.data.length < 1) {
      if (password === confirmPassword) {
        let data = jwt_decode(googleAuth.credential);
        const json = {
          username: data.name,
          email: data.email,
          newpassword: password,
          confirmpassword: confirmPassword,
          contact: "123",
          mobile_number: mobileNumber,
        };
        axios
          .post("https://rich-gray-macaw-sock.cyclic.app/api/auth/register", json)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        console.log(json);
        navigate("/login");
      } else {
        setMissmatchPassword(true);
      }
    } else {
      navigate("/signup");
    }
  };
  // Timer to navigate the page to login page
  // update the timer function here
  const alreadyUserCss = { color: "red", fontSize: 14 };
  return (
    <div className="center-contents getPasswordMainContainer">
      <div className="getPassFieldsContainer">
        {alreadyUser ? (
          <>
            <h5>It seems that, you are already a user</h5>
            <span className="centerContents" style={alreadyUserCss}>
              Redirecting you to login page in
            </span>
            <span style={alreadyUserCss} className="centerContents">
              {count}
            </span>
          </>
        ) : (
          <>
            <label className="getPassHeadingTag">
              Give us some more information
            </label>
            <form onSubmit={submitAndValidate} className="getPass">
              <label>Password</label>
              <div className="getPassGiveMargin centerContents getPassPasswordContainer">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMissmatchPassword(false);
                  }}
                  className="getPass getPassPasswordInputContainer"
                  type={showpass ? "password" : "text"}
                  placeholder="Password"
                ></input>
                <button
                  className="getPassPasswordButtonContainer"
                  type="button"
                  onClick={() => setShowpass(!showpass)}
                >
                  <FontAwesomeIcon icon={showpass ? faEye : faEyeSlash} />
                </button>
              </div>
              <label>Confirm Password</label>
              <div className="getPassGiveMargin centerContents getPassPasswordContainer">
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setMissmatchPassword(false);
                  }}
                  className="getPass getPassPasswordInputContainer"
                  type={showpass ? "password" : "text"}
                  placeholder="Confirm Password"
                ></input>
                <button
                  className="getPassPasswordButtonContainer"
                  type="button"
                  onClick={() => setShowpass(!showpass)}
                >
                  <FontAwesomeIcon icon={showpass ? faEye : faEyeSlash} />
                </button>
              </div>
              {mismatchPassword && (
                <div className="centerContents getPassErrorMessage">
                  <span>The passwords doesn't match</span>
                </div>
              )}
              <label>Phone Number</label>
              <div className="getPassGiveMargin centerContents">
                <input
                  type="Number"
                  className="getPassPhoneNumberContainer"
                  placeholder="Phone number"
                  value={mobileNumber}
                  onChange={(e) => {
                    if (e.target.value.length < 11)
                      setMobileNumber(e.target.value);
                  }}
                ></input>
              </div>
              <div className="getPassGiveMargin centerContents">
                <button type="submit" className="getPassSubmitButton">
                  Signup
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
