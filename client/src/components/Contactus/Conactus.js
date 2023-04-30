import React, { useState,useEffect } from "react";
import "./Contactus.css";
import conatct from "../../Assets/contactus.avif";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Conactus() {
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [phone_number,setphone_number]=useState();
    const [message,setmessage]=useState();
    const Navigate = useNavigate();
    const submit=async (e)=>{
        console.log(name);
        console.log(email);
        console.log(phone_number);
        console.log(message);
        e.preventDefault();
    
    const response = await fetch("https://rich-gray-macaw-sock.cyclic.app/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                name :  name,
                email: email,
                phone_number:phone_number,
                message:message
            }
        ),
      });
      const json = await response.json();
        alert("Thanks for the feedback")
        Navigate("/");
    };

  return (
    <>
    <Navbar/>
    <div className='contactus-container'>
        <div className='contactus-item'>
            <div className='contactus-contact'>
                <div className='first-text text'>
                    Let's Get In Touch
                </div>
                <img src={conatct}className='contactus-image' />
                <div className='socil-links'>
                    <span className='second-text text'>Connect with us:</span>
                    <ul className='social-media'>
                        <li><a href='#'><FaFacebookF/></a></li>
                        <li><a href='#'><FaTwitter/></a></li>
                        <li><a href='#'><FaYoutube/></a></li>
                        <li><a href='#'><FaLinkedin/></a></li>
                    </ul>
                </div>
            </div>
            <div className='contactus-submit-form'>
                <h4 className='third-text text'>Contact Us</h4>
                <form onSubmit={(e) => submit(e)} action="" className="form">
                    <div className='input-box'>
                        <input type='text' className='input' onChange={(e)=>setname(e.target.value)} required></input>
                        <label>Name</label>
                    </div>
                    <div className='input-box'>
                        <input type='email' className='input' onChange={(e)=>setemail(e.target.value)} required></input>
                        <label>Email</label>
                    </div>
                    <div className='input-box'>
                        <input type='number' className='input' onChange={(e)=>setphone_number(e.target.value)}required></input>
                        <label>Phone</label>
                    </div>
                    <div className='input-box'>
                        <textarea name='' id='message' type='text' className='input' onChange={(e)=>setmessage(e.target.value)}required></textarea>
                        <label>MESSAGE</label>
                    </div>
                    <input className="contact-button" type='submit' value='Submit'></input>
                </form>
              </div>
            </div>
        </div>
      </>
  );
}
