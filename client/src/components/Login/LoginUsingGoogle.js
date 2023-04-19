import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../Utilis/Authentication";
import './login.css'

export const LoginUsingGoogle = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <GoogleOAuthProvider clientId="863387233032-dhmer8ecstkorb5q9kg16u4s3j8b958u.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={async (response) => {
          let data = jwt_decode(response.credential);
          const res = await fetch(
            "http://localhost:8000/api/auth/loginUsingGoogle",
            {
              method: "POST",
              headers: { "Content-Type": "Application/json" },
              body: JSON.stringify({
                email: data.email,
              }),
            }
          );
          const json = await res.json();
          if (json.status === "Sucess") {
            auth.login(json.data[0].username);
            localStorage.setItem("username", json.data[0].username);
            navigate(location.state ? location.state.path : "/", {
              replace: true,
            });
          } else {
            console.log("There is some error in the login");
            navigate("/login");
          }
        }}
        onError={(error) => {
          console.log("Login Failed");
          console.log(error);
        }}
        size="large"
      />
    </GoogleOAuthProvider>
  );
};
