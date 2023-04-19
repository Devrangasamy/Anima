import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleContext } from "../../Utilis/GoogleAuthendication";

export const SignupUsingGoogle = () => {
  const navigate = useNavigate();
  const googleAuth = useGoogleContext()
  return (
    <GoogleOAuthProvider clientId="863387233032-dhmer8ecstkorb5q9kg16u4s3j8b958u.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(response) => {
          googleAuth.updateCredential(response.credential)
          navigate("/signup/getPassword");
        }}
        onError={(error) => {
          console.log("Login Failed");
          console.log(error);
        }}
        text="signup_with"
        width="300px"
        size="large"
      />
    </GoogleOAuthProvider>
  );
};
