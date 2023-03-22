import React from 'react'
import { GoogleLogin } from '@react-oauth/google'

const clientID = "733043188894-m1mk60eu5vjnhm5qq6rrath5b7i1sld5.apps.googleusercontent.com"

export const LoginUsingGoogle = () => {
    const onSucess = (result) =>{
        console.log("Login was sucessfull", result.profileObj)
    }

    const onFailure = (result) => {
        console.log("The authendication failed", result)
    }
  return (
    <div>
        <GoogleLogin clientID = {clientID}
            buttonText = "Login"
            onSucess = {onSucess} 
            onFailure = {onFailure} 
            cookiePolicy = {"single_host_origin"} 
            isSignedIn = {true} 
        />
    </div>
  )
}
