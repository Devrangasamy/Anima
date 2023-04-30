import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Otpinput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import "./Forgetpassword.css";

export const Forgetpassword = () => {
  // To get the data from the user
  const [email, setEmail] = useState("");

  // Flags for error and showing and hiding
  const [invalidemail, setInvalidemail] = useState(false);
  const [emailContainer, setEmailContainer] = useState(true);
  const [timerStart, setTimerStart] = useState(false);
  const [otpContainer, setOtpContainer] = useState(false);
  const [wrongOTPFlag, setWrongOTPFlag] = useState(false);
  const [enternewPass, setEnternewPass] = useState(false);
  const [passMismatch, setPassMismatch] = useState(false);
  const [showpass, setShowpass] = useState(false);
  const [navigateToLogin, setNavigateToLogin] = useState(false);

  // To store the otp
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [otp, setOtp] = useState("");

  // Timers
  const [count, setCount] = useState(0);
  const [place, setPlace] = useState("");

  // password
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // To navigate the page
  const navigate = useNavigate();

  const removeMargin = {
    marginBottom: 0,
  };

  // To find wheather the mail id is in the database or not
  const isEmailinDatabase = (e) => {
    e.preventDefault();
    console.log("Submitted the data");
    axios
      .get(`https://rich-gray-macaw-sock.cyclic.app/api/auth/:${email}`)
      .then((res) => {
        if (res.data.length < 1) {
          setInvalidemail(true);
          return;
        }
      })
      .catch((err) => console.log(err));
    sendMail();
  };

  //This will send the mail using the nodemailer
  const sendMail = () => {
    // This generates the 6 digit OTP
    setEmailContainer(false);
    setOtpContainer(true);
    redirect("newForgotPassword", 60);
    let digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setGeneratedOTP(OTP);
    // This sends the OTP via the email
    axios
      .post("https://rich-gray-macaw-sock.cyclic.app/sendMail", {
        to_address: email,
        subject: "Anima Password reset",
        message: `The otp to change your password is ${OTP}`,
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  };

  // This is to check the OTP
  const checkOtp = (e) => {
    e.preventDefault();
    if (otp === generatedOTP) {
      setOtpContainer(false);
      setTimerStart(false);
      setEnternewPass(true);
      setCount(0);
    } else {
      console.log(generatedOTP);
      setWrongOTPFlag(true);
    }
  };

  // Timer and the function to redirect
  useEffect(() => {
    if (timerStart === true) {
      const interval = setInterval(() => setCount((prev) => prev - 1), 1000);
      if (count < 1) {
        navigate(`/${place}`);
        window.location.reload(false);
      }
      return () => clearInterval(interval);
    }
  }, [count]);
  // Function to start timer and navigate to the required page
  const redirect = (toplace, seconds) => {
    setPlace(toplace);
    setCount(seconds);
    setTimerStart(true);
  };

  const validatePassword = (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      updatePassword();
    } else {
    }
  };

  const updatePassword = async () => {
    if (password === confirmPass) {
      redirect("login", 5);
      setNavigateToLogin(true);
      setEnternewPass(false);
      await axios
        .post("https://rich-gray-macaw-sock.cyclic.app/api/auth/updatePassword", {
          email: email,
          newpassword: password,
          confirmpassword: confirmPass,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="fpass">
        <div className="fpassMainContainer" style={{ width: 400 }}>
          <h5 style={{ textAlign: "center" }}>Forgetpassword</h5>
          {emailContainer && (
            <div>
              <Form onSubmit={(e) => isEmailinDatabase(e)}>
                <Form.Group controlId="formGetEmailID">
                  <Form.Label>Email id</Form.Label>
                  <Form.Control
                    className="mb-3"
                    type="email"
                    placeholder="sample@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setInvalidemail(false);
                    }}
                  />
                  {invalidemail && (
                    <Form.Text style={{ color: "red" }}>
                      Your mailid does not match in our records
                    </Form.Text>
                  )}
                </Form.Group>
                <div className="centerContents">
                  <Button variant="outline-primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          )}
          {otpContainer && (
            <div>
              <Form onSubmit={checkOtp}>
                <Form.Group controlId="OTPContainer">
                  <Form.Label style={removeMargin} className="centerContents">
                    Enter the OTP sent to your email
                  </Form.Label>
                  <div className="centerContents">
                    <Otpinput
                      value={otp}
                      onChange={(e) => {
                        setOtp(e);
                        setWrongOTPFlag(false);
                      }}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                      shouldAutoFocus={true}
                    />
                  </div>
                  {wrongOTPFlag && (
                    <div className="centerContents">
                      <Form.Text style={{ color: "red" }}>
                        OTP is incorrect
                      </Form.Text>
                    </div>
                  )}
                </Form.Group>
                <div className="centerContents" style={{ marginTop: 9 }}>
                  <Button variant="outline-primary" type="submit">
                    Submit
                  </Button>
                </div>
                <div className="centerContents">
                  <div style={{ color: "red" }}>
                    <span>Auto refreh in {count}</span>
                  </div>
                </div>
              </Form>
            </div>
          )}
          {enternewPass && (
            <div>
              <Form onSubmit={validatePassword}>
                <Form.Group controlId="formPassword" className="mb-2">
                  <Form.Label style={removeMargin}>Password</Form.Label>
                  <Form.Control
                    type={showpass ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPassMismatch(false);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formConfirmPasword">
                  <Form.Label style={removeMargin}>Confirm password</Form.Label>
                  <Form.Control
                    type={showpass ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => {
                      setConfirmPass(e.target.value);
                      setPassMismatch(false);
                    }}
                    value={confirmPass}
                  />
                  {passMismatch && (
                    <div className="centerContents">
                      <Form.Text style={{ color: "red" }}>
                        The passwords doesnot match
                      </Form.Text>
                    </div>
                  )}
                  <Form.Check
                    style={{ marginTop: 2 }}
                    onChange={() => setShowpass(!showpass)}
                    type="checkbox"
                    label="Show Password"
                  />
                </Form.Group>
                <div className="centerContents">
                  <Button
                    variant="outline-primary"
                    type="submit"
                    style={{ marginTop: 2 }}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          )}
          {navigateToLogin && (
            <div>
              <h5 style={{ textAlign: "center" }}>Navigating to Login page</h5>
              <div className="centerContents">
                <span style={{ color: "red" }}>Redirecting in {count}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
