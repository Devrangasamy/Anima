import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Utilis/Authentication";
import Navbar from "../Navbar/Navbar";
import { Loading } from "../loading/Loading";
import { LoginUsingGoogle } from "./LoginUsingGoogle";

export const Login = () => {
  // To store the form contents
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  // To show the pass
  const [showpass, setShowpass] = useState(false);
  const [noMatch, setNoMatch] = useState(false);

  //to use the authendication and the other
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // For the loading
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log("re rendering the component");
  });
  const removeMargin = {
    marginBottom: 0,
  };

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://rich-gray-macaw-sock.cyclic.app/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          newpassword: password,
        }),
      }
    );
    const json = await response.json();
    await setLoading(false);
    if (json.status === "Success") {
      setLoading(true);
      auth.login(json.data[0].username, json.data[0]._id);
      localStorage.setItem("username", json.data[0].username);
      navigate(location.state ? location.state.path : "/", { replace: true });
      // setLoading(false)
      setPassword("");
      setemail("");
    } else {
      setNoMatch(true);
      navigate("/login");
    }
  };
  const forgotPassword = () => {
    navigate("/forgetpassword");
  };
  return (
    <>
      {isLoading ? (
        <div className="loadingContainer">
          <Loading />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="loginMainContainter">
            <div className="loginFormContainer">
              <h5 style={{ textAlign: "center", marginBottom: 10 }}>
                Anima login
              </h5>
              <Form onSubmit={submit}>
                <Form.Group controlId="login-form-name" className="mb-3">
                  <Form.Label style={removeMargin}>
                    Username or email
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                      setNoMatch(false);
                    }}
                    autoComplete="off"
                    placeholder="Username or Email"
                  />
                </Form.Group>
                <Form.Group controlId="login-form-password">
                  <Form.Label style={removeMargin}>Password</Form.Label>
                  <Form.Control
                    type={showpass ? "text" : "password"}
                    value={password}
                    autoComplete="off"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setNoMatch(false);
                    }}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Show password"
                    onChange={() => setShowpass(!showpass)}
                  />
                  {noMatch && (
                    <div className="centerContents">
                      <Form.Text style={{ color: "red" }}>
                        username and password mismatches
                      </Form.Text>
                    </div>
                  )}
                </Form.Group>
                <div className="centerContents mb-3">
                  <LoginUsingGoogle />
                </div>
                <div className="loginButtonContainer">
                  <Button
                    variant="outline-primary"
                    type="button"
                    onClick={() => forgotPassword()}
                  >
                    Forgot password
                  </Button>
                  <Button
                    variant="outline-primary"
                    type="submit"
                    disabled={isLoading}
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </>
      )}
    </>
  );
};
