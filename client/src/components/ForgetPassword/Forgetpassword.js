import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Forgetpassword.css";
import emailjs from 'emailjs-com'

export const Forgetpassword = () => {
  const[mailId, setMailID] = useState('')
  const [dataList, setDataList] = useState()
  const fetchData = () => {
    axios.get('http://localhost:8000/api/auth')
    .then((response) => setDataList(response.data))
    .catch((error) => console.log(error)) 
  }
  fetchData()
  const sendMail = (event) => {
    // Need to check for the mail id in the database 
    // If there is the mail id then send mail else ask them to sign up
    event.preventDefault
    emailjs.sendForm('service_h1yz6tr', 'template_8t5kr16', event.target,'template_8t5kr16' )
  }
  return (
    <div className = "forget-password-main-container">
      <label>Enter your email id</label>
      <input onChange = {(event) => setMailID(event.target.value)} type = 'email'></input>
      <button onClick = {(event) => sendMail(event)}>Submit</button>
    </div>
  );
};
