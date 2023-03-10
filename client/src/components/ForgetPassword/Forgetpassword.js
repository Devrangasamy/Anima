import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Forgetpassword.css";

export const Forgetpassword = () => {
  const[mailId, setMailID] = useState('')
  const [dataList, setDataList] = useState()
  const fetchData = () => {
    axios.get('http://localhost:8000/api/auth')
    .then((response) => setDataList(response.data))
    .catch((error) => console.log(error)) 
  }
  fetchData()
  const sendMail = () => {
    // Need to check for the mail id in the database 
    // If there is the mail id then send mail else ask them to sign up
    let dataThereFlag = false
    for(let i = 0; i < dataList.length; i++){
      let val = dataList[i]
      if(val.email === mailId){
        dataThereFlag = true
        break
      }
    }
  }
  return (
    <div className = "forget-password-main-container">
      <label>Enter your email id</label>
      <input onChange = {(event) => setMailID(event.target.value)} type = 'email'></input>
      <button onClick = {() => sendMail()}>Submit</button>
    </div>
  );
};
