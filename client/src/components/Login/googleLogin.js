import { GoogleLogin } from '@react-oauth/google'
import React from 'react'

export const OneTapGoogleLogin = () => {
  return (
    <>
        <GoogleLogin
            onSuccess={(response) => console.log(response)}
            onError = {(error) => console.log(error)}
            useOneTap = {true}
            cancel_on_tap_outside = {false}
        />
    </>
  )
}
