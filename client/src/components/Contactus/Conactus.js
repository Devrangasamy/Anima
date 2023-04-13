import React from "react";
import "./Contactus.css";
import conatct from "../../Assets/contactus.avif";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Conactus() {
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
                <form action=''>
                    <div className='input-box'>
                        <input type='text' className='input' required></input>
                        <label>Name</label>
                    </div>
                    <div className='input-box'>
                        <input type='email' className='input' required></input>
                        <label>Email</label>
                    </div>
                    <div className='input-box'>
                        <input type='number' className='input' required></input>
                        <label>Phone</label>
                    </div>
                    <div className='input-box'>
                        <textarea name='' id='message' type='text' className='input' required></textarea>
                        <label>Name</label>
                    </div>
                    <input className="btn" type='submit' value='Submit'></input>
                </form>
              </div>
            </div>
        </div>
      </>
  );
}