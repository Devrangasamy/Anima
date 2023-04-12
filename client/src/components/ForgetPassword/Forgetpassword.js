import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Forgetpassword.css";
import emailjs from '@emailjs/browser'

// To show up the icons in the page
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

export const Forgetpassword = () => {
  // To store the mail ID
  const[mailId, setMailID] = useState('')
  const[dataList, setDataList] = useState('')
  const[mailIDWrongFlag, setMailIDWrongFlag] = useState(false)
  const[mailIdContainer, setMailIdContainer] = useState(true)
  
  // To store the OPT Data
  const[otpFlag, setOtpFlag] = useState(false)
  const[userOtp, setUserOtp] = useState('')
  const[generatedOTP, setGeneratedOTP] = useState('')
  const[wrongOTPFlag, setWrongOTPFlag] = useState(false)

  // To store the new password
  const[changePassFlag, setChangePassFlag] = useState(false)
  const[pass, setPass] = useState('')
  const[confirmPass, setConfirmPass] = useState('')
  const[showPass, setShowPass] = useState(false)
  const[wrongPasswordFlag, setWrongPasswordFlag] = useState(false)

  const navigate = useNavigate()
  // This is for the timer
  const[seconds, setSeconds] = useState(60)
  const[timerFlag, setTimerFlag] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/auth")
    .then((response) => {setDataList(response.data)})
    .catch((error) => console.log(error))
  })

  // This is the timer to refresh the page
  useEffect(() => {
    let interval = null
    if(timerFlag === true){
      interval = setInterval(() => {
        setSeconds(seconds - 1)
        console.log(seconds)
      }, 1000)
    }
    return (() => clearInterval(interval))
  })
  

  // This is to send the OTP Mail
  const sendMail = (event) => {
    event.preventDefault() 
    for(let i = 0; i < dataList.length; i++){
      let data = dataList[i]
      if(data.email === mailId){
        // This generates the 6 digit OTP
        let digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 6; i++ ) {OTP += digits[Math.floor(Math.random() * 10)]}
        setGeneratedOTP(OTP)
        console.log(OTP)
        // This sends the OTP via the email
        emailjs.send("service_1k651y6","template_2gt9cx3",{
          to_name: `${data.username}`,
          message: `${OTP}`,
          to_email: `${mailId}`,
          }, "L5WeMsvekZj0yavpY")
          .then((result) => console.log(result))
          .catch((error) => console.log(error))
        setMailIdContainer(false)
        setOtpFlag(true)
        setTimerFlag(true)
        return
      }
    }
    setMailIDWrongFlag(true)
    setMailID('')
  }
  
  const checkOtp = (event) => {
    event.preventDefault()
    if(generatedOTP === userOtp){
      setOtpFlag(false)
      setChangePassFlag(true)
      setGeneratedOTP('')
    }
    else{
      console.log('The OTP is incorrect Enter it again')
      setWrongOTPFlag(true)
    }
    setUserOtp('')
  }
  const updatePassword = () => {
  if(pass === confirmPass){
      console.log('There password is updated sucessfully')
      navigate('/login')
  }
  else{
    console.log('The password dont match correctly ;( kindly re-enter it')
    setWrongPasswordFlag(true)
    }
  }
  const changeShowStatus = () => {
    setShowPass(!showPass)
    console.log(showPass)
  }
  const sampleUpdate = () => {
    console.log("This is the sample")
  }
  return (
    <div className = "forget-password-container">
      {/* <button onClick = {sampleUpdate}>Sample button</button> */}
      <div className = 'forgot-password-main-container'>
        <div>
          {/* This is the mail id container */}
          {mailIdContainer && <>
            <div className="forgot-password-mail-container">
              <div className="center-contents forgot-password-spacing">
                <h3>Forgot Password</h3>
              </div>
              <label>Enter your Registered Mail ID</label>
              <br></br>
              <input type = 'email' value = {mailId} onChange = {(event) => {setMailID(event.target.value); setMailIDWrongFlag(false)}} placeholder = "Enter your registered mail id"></input>
              <br></br>
              {/* This is to show the erorr message when the mail id is wrong */}
              {mailIDWrongFlag && <>
                <span className="forget-password-mail-id-error-message">Entered Mail ID doesn't match with our records</span>
              </>}
              <div><button onClick = {(event) => sendMail(event)}>Submit</button></div>
            </div>
          </>}
          {/* This is the otp container */}
          {otpFlag && <>
            <div className="forgot-password-otp-container">
              <div className="center-contents forgot-password-spacing">
                <h3>Forgot Password</h3>
              </div>
              <div className="center-contents">
                <span>OTP sent to registered Mail ID</span>
              </div>
              <div className="center-contents">
                <input placeholder="Enter the OTP" value = {userOtp} onChange = {(event) => {if(userOtp.length < 6 || event.target.value.length < 6)setUserOtp(event.target.value);setWrongOTPFlag(false)}} type = 'text' size={2}></input>
              </div>
              {wrongOTPFlag && <>
                <div className="center-contents">
                  <span className="forget-password-mail-id-error-message">The OTP is incorrect</span>
                </div>
              </>}
              <div className="center-contents">
                <button onClick = {(event) => checkOtp(event)}>Submit OTP</button>
              </div>
              {timerFlag && <div className="center-contents forgot-password-auto-reload"><span>Auto refresh in {seconds}</span></div>}
            </div>
          </>}
          {/* This is for updating the password */}
          {changePassFlag && <>
            <div className="forgot-password-password-container">
              <div className="center-contents forgot-password-spacing">
                <h3>Forgot Password</h3>
              </div>
              <div>
                <label className="center-contents">Enter the new password</label>
              </div>
              <div className="password-container-div-border">
                <input id = "forgot-password-input" type = {showPass ? "text" : "password"} onChange = {(event) => {setPass(event.target.value);setWrongPasswordFlag(false)}} className = "remove-border" placeholder="Password"></input>
                <button onClick = {() => changeShowStatus()} className = 'remove-border password-visibility-button remove-hover' id = 'forgot-password-button'>{showPass ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon = {faEyeSlash}/>}</button>
              </div>
              <div className="password-container-div-border forgot-password-password-container">
                <input type = {showPass ? "text" : "password"} onChange = {(event) => {setConfirmPass(event.target.value); setWrongPasswordFlag(false)}} placeholder="Re-enter the password"></input>
                <button onClick = {() => changeShowStatus()} className = 'remove-border password-visibility-button remove-hover' id = 'forgot-password-button'>{showPass ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon = {faEyeSlash}/>}</button>
              </div>
              {wrongPasswordFlag && <>
                <div className="center-contents">
                  <span className="forget-password-mail-id-error-message">The passwords don't match</span>
                </div>
              </>}
              <div className="center-contents">
                <button onClick = {() => updatePassword()}>Update Password</button>
              </div>
            </div>
          </>}
        </div>
      </div>
    </div>
  );
};
