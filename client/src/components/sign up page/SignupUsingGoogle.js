import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'

export const SignupUsingGoogle = () => {
    return (
        <GoogleOAuthProvider clientId="863387233032-dhmer8ecstkorb5q9kg16u4s3j8b958u.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={response => {
                    console.log(response)
                }}
                onError={(error) => {
                    console.log('Login Failed')
                    console.log(error)
                }}
                useOneTap
                
            />
        </GoogleOAuthProvider>
    )
}