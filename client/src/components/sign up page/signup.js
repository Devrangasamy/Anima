import React, { useState } from 'react'
import UseFormInp from './use form input'
import './signup.css'
import { useNavigate } from 'react-router-dom'

function Signup(event) {
    // Declaration for the variable data
    const Navigate = useNavigate();
    const [name, name_attribute] = UseFormInp('')
    const [email_id, email_id_attribute] = UseFormInp('')
    const [phone_number, phone_number_attribute] = UseFormInp('')

    // Password variables and validation
    const[pass, setPass] = useState('')
    const[confirm_pass, SetConfirmPass] = useState('')
    const[err_pswrd, setErrPswrd] = useState(false)
    const validatePass = (event) => {
        setPass(event.target.value)
        console.log('Inside the pass validate')
        if(pass.length < 8)
            setErrPswrd(true)   
        else 
            setErrPswrd(false)
    }

    //Will be called on button pressed as sign up 
    const submitData =  async  (event) => {
        if(pass !== confirm_pass)
            return(alert('Passwords donot match'))
            console.log(name, pass, email_id, phone_number)
            event.preventDefault()
        const response = await fetch(
            "http://localhost:8000/api/auth/register",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username:name,
                email: email_id,
                newpassword:pass,
                confirmpassword:confirm_pass,
                contact:phone_number
              }),
            });
            const json = await response.json();
            console.log(json)
            
            if (json == "success") {
                Navigate("/login");
                alert(json)
            }

    }
    return (
        <div className='container'>
        <form onSubmit = {submitData}>
            <div className='center-contents'>
                <h2 id='welcome-text-container'>SIGN UP</h2><br></br>
            </div>
            <input type = 'text' placeholder='Name'  {...name_attribute}></input><br></br>
            <input type = 'email' placeholder='Email ID'  {...email_id_attribute}></input><br></br>
            <div id='password-status-container'>
                {err_pswrd && <span>Password must contain 8 letters</span>}
            </div>
            <input type = 'password' placeholder='PassWord' onChange = {(event) => validatePass(event)} required></input>
            <br></br>
            <input type = 'password' placeholder='Confirm PassWord' required onChange={(event) => SetConfirmPass(event.target.value)}></input><br></br>
            {}
            <input type = '' placeholder='Phone Number'  {...phone_number_attribute} required></input><br></br>
            <div className = 'center-container'>
                <button type = 'submit' id = 'sign-up-button'>Sign Up</button>
                <button type = 'reset' id = 'reset-button'>Reset</button>
            </div>
        </form>
    </div>
  )
}

export default Signup