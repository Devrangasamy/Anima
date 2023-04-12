import React, { useEffect, useState } from 'react'
import { useGoogleContext } from '../../Utilis/GoogleAuthendication'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import style from './getPasswordAndUpdate.module.css'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { googleLogout } from '@react-oauth/google'

export const GetPasswordAndUpdate = () => {
    // Get the crendential from the google login
    const googleAuth = useGoogleContext()

    // password show and hide flags
    const [showpass, setShowpass] = useState(false)
    // Password mismatch error flag
    const [mismatchPassword, setMissmatchPassword] = useState(false)

    // Get the password and store in the states
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitAndValidate = (e) => {
        e.preventDefault()
        console.log('Inside the submit')
        if ((password === confirmPassword)) {
            let data = jwt_decode(googleAuth.credential)
            const json = {
                username : data.name, 
                email : data.email,
                newpassword : password,
                confirmpassword : confirmPassword,
                contact : '123'
            }
            console.log(json)
        }
        else{
            console.log("There is mismatch in the password")
        }
    }
    const showData = () => {
        console.log("This is the sample")
    }
    return (
        <div>
            <label>Give us some more information</label>
            <form onSubmit={submitAndValidate}>
                <div>
                    <input onChange={e => setPassword(e.target.value)} type={showpass ? 'password' : 'text'}></input>
                    <button type='button' onClick={() => setShowpass(!showpass)}><FontAwesomeIcon icon={showpass ? faEye : faEyeSlash} /></button>
                </div>
                <div>
                    <input onChange={e => setConfirmPassword(e.target.value)} type={showpass ? 'password' : 'text'}></input>
                    <button type='button' onClick={() => setShowpass(!showpass)}><FontAwesomeIcon icon={showpass ? faEye : faEyeSlash} /></button>
                </div>
                <div>
                    <button type='submit'>Signup</button>
                </div>
            </form>
        </div>
    )
}
