import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Forgetpassword.css";
import emailjs from '@emailjs/browser'

// To show up the icons in the page
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const Forgetpassword = () => {
  // To store the mail ID
  const[mailId, setMailID] = useState('')
  const[dataList, setDataList] = useState('')
  const[mailIDWrongFlag, setMailIdWrongFlag] = useState(false)
  
  // To store the OPT Data
  const[otpFlag, setOtpFlag] = useState(true)
  const[userOtp, setUserOtp] = useState('')
  const[generatedOTP, setGeneratedOTP] = useState('')

  // To store the new password
  const[changePassFlag, setChangePassFlag] = useState(true)
  const[pass, setPass] = useState('')
  const[confirmPass, setConfirmPass] = useState('')
  const[showPass, setShowPass] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/auth")
    .then((response) => {setDataList(response.data)})
    .catch((error) => console.log(error))
  })

  // This is to send the OTP Mail
  const sendMail = (event) => {
    event.preventDefault() 
    for(let i = 0; i < dataList.length; i++){
      let data = dataList[i]
      if(data.email === mailId){
        // This generates the 6 digit OTP
        var digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 6; i++ ) {OTP += digits[Math.floor(Math.random() * 10)]}
        setGeneratedOTP(OTP)
        // This sends the OTP via the email
        emailjs.send("service_1k651y6","template_2gt9cx3",{
          to_name: `${data.username}`,
          message: `${OTP}`,
          to_email: `${mailId}`,
          }, "L5WeMsvekZj0yavpY")
          .then((result) => console.log(result))
          .catch((error) => console.log(error))
        setOtpFlag(true)
        break
      }
      else{
        
      }
    }
  }
  
  const checkOtp = (event) => {
    event.preventDefault()
    axios.get("http://localhost:8000/api/auth/6401928fd92c2d5b1d5a3a01")
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
    // axios.put('http://localhost:8000/api/auth/64145988666475239c45730f', {"password" : "b"})
    // .then((response) => console.log(response))
    // .catch((error) => console.log(error))
    // if(generatedOTP === userOtp){
    //   console.log('The otp is correct')
    //   setOtpFlag(false)
    //   setChangePassFlag(true)
    // }
    // else
    //   console.log('The OTP is incorrect Enter it again')
    // setUserOtp('')
  }
  const updatePassword = () => {
  if(pass === confirmPass){
      console.log('There password is updated sucessfully')
  }
  else{
    console.log('The password dont match correctly ;( kindly re-enter it')
    }
  }
  const changeShowStatus = () => {
    setShowPass(!showPass)
    console.log(showPass)
  }
  return (
    <div className = "forget-password-container">
      <div>
        {/* This is the mail id container */}
        <div className="forgot-password-mail-container">
          <label>Enter your Registered Mail ID</label><br></br>
          <input value = {mailId} onChange = {(event) => setMailID(event.target.value)} placeholder = "Enter your registered mail id"></input><br></br>
          {/* This is to show the erorr message when the mail id is wrong */}
          <div><button onClick = {(event) => sendMail(event)}>Submit</button></div>
        </div>


        {otpFlag && <>
          <input placeholder="Enter the OTP" value = {userOtp} onChange = {(event) => {if(userOtp.length < 6 || event.target.value.length < 6)setUserOtp(event.target.value);}} type = 'number' size={2}></input>
          <button onClick = {(event) => checkOtp(event)}>Submit OTP</button>
        </>}
        {changePassFlag && <>
          <div className="forgot-password-container">
            <input id = "forgot-password-input" type = {showPass ? "text" : "password"} onChange = {(event) => setPass(event.target.value)} className = "remove-border" placeholder="Password"></input>
            <button onClick = {() => changeShowStatus()} className = 'remove-border' id = 'forgot-password-button'><FontAwesomeIcon icon = {faEye}/></button>
          </div>
          <input type = {showPass ? "text" : "password"} onChange = {(event) => setConfirmPass(event.target.value)} placeholder="Re-enter the password"></input>
          <button onClick = {() => changeShowStatus()} className = 'remove-border' id = 'forgot-password-button'><FontAwesomeIcon icon = {faEye}/></button>
          <button onClick = {() => updatePassword()}>Update Password</button>
        </>}
      </div>
    </div>
  );
};
