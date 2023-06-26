import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { SignupUsingGoogle } from "./SignupUsingGoogle";
import "./signup.css";
import UseFormInp from "./use form input";

export const Signup = () => {
  // Declaring the required variables
  const [username, usernameAttr, resetUsername] = UseFormInp("");
  const [email, emailAttr, resetEmail] = UseFormInp("");
  const [number, setNumber] = useState("");

  // Declaring for the passwords
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  // To show the password in the container
  const [showpass, setShowpass] = useState(false);

  // to navigate the page
  const navigate = useNavigate();

  // count to navigate to main page
  const [count, setCount] = useState(5);

  // CSS to remove the margin
  const removeMargin = {
    marginBottom: 0,
  };

  // Email already with us
  const [mailIdWithus, setMailIdWithus] = useState(false);

  // timer function for the counter
  const timer = () => {
    setCount((prev) => prev - 1);
  };
  useEffect(() => {
    if (mailIdWithus === true) {
      const interval = setInterval(timer, 1000);
      if (count < 1) navigate("/login");
      return () => clearInterval(interval);
    }
  }, [mailIdWithus, count]);

  // onsubmit of the form data
  const submitData = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) setPasswordMismatch(true);
    else {
      // post method
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          newpassword: password,
          confirmpassword: confirmPassword,
          contact: number,
        }),
      });
      const json = await response.json();
      console.log(json);

      if (json.status === "success") {
        navigate("/login");
      } else {
        console.log("email already exists");
        setMailIdWithus(true);
      }
    }
  };

  // to reset all the data in the form
  const resetData = () => {
    resetUsername();
    resetEmail();
    setPassword("");
    setConfirmPassword("");
    setNumber("");
  };

  return (
    <>
      <Navbar />
      <div className="signUpMainContainer">
        <div className="signUpFormContainer">
          {mailIdWithus ? (
            <>
              <div className="centerContents">
                <h5>It seems you are already a user</h5>
              </div>
              <div className="centerContents">
                <span style={{ color: "red" }}>
                  Redirecting to login page in
                </span>
              </div>
              <div className="centerContents">
                <span style={{ color: "red" }}>{count}</span>
              </div>
            </>
          ) : (
            <>
              <Form onSubmit={submitData}>
                <div className="centerContents">
                  <Form.Label style={{ fontSize: 20, fontWeight: 700 }}>
                    SIGN UP
                  </Form.Label>
                </div>
                <Form.Group controlId="formUsername" className="mb-2">
                  <Form.Label style={removeMargin}>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={username}
                    {...usernameAttr}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-2">
                  <Form.Label style={removeMargin}>Email </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    {...emailAttr}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-2">
                  <Form.Label style={removeMargin}>Password</Form.Label>
                  <Form.Control
                    type={showpass ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordMismatch(false);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="form-group-id">
                  <Form.Label style={removeMargin}>Confirm Password</Form.Label>
                  <Form.Control
                    style={removeMargin}
                    type={showpass ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setPasswordMismatch(false);
                    }}
                  />
                  {passwordMismatch && (
                    <div className="centerContents">
                      <Form.Text
                        style={(removeMargin, { marginTop: 0 })}
                        className="signupFormWrongPassword"
                      >
                        Passwords doesnot match
                      </Form.Text>
                    </div>
                  )}
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="mb-2">
                  <Form.Check
                    style={removeMargin}
                    type="checkbox"
                    label="Show password"
                    onClick={(e) => {
                      setShowpass(!showpass);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formMobilenumber" className="mb-3">
                  <Form.Label style={removeMargin}>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Form.Group>
                <div className="signupFormButtonContainer mb-3">
                  <Button
                    className="signupFormButton"
                    variant="outline-primary"
                    type="submit"
                  >
                    SIGNUP
                  </Button>
                  <Button
                    className="signupFormButton"
                    variant="outline-danger"
                    type="reset"
                    onClick={resetData}
                  >
                    RESET
                  </Button>
                </div>
                <div className="centerContents">
                  <SignupUsingGoogle />
                </div>
              </Form>
              <hr></hr>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate("/login")}
                >
                  Already have an account
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
