import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../Utilis/Authentication";
import "./login.css";
import { SmallLoading } from "../loading/SmallLoading";

export const LoginUsingGoogle = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // For the loading container
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      <GoogleOAuthProvider clientId="863387233032-dhmer8ecstkorb5q9kg16u4s3j8b958u.apps.googleusercontent.com">
        {isLoading ? (
          <div>
            <SmallLoading/>
          </div>
        ) : (
          <>
            <GoogleLogin
              onSuccess={async (response) => {
                setLoading(true);
                let data = jwt_decode(response.credential);
                const res = await fetch(
                  "https://rich-gray-macaw-sock.cyclic.app/api/auth/loginUsingGoogle",
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
                  auth.login(json.data[0].username, json.data[0]._id);
                  localStorage.setItem("username", json.data[0].username);
                  navigate(location.state ? location.state.path : "/", {
                    replace: true,
                  });
                  setLoading(false);
                } else {
                  console.log("There is some error in the login");
                  setLoading(false);
                  navigate("/login");
                }
              }}
              onError={(error) => {
                setLoading(false);
                console.log("Login Failed");
                console.log(error);
              }}
              size="large"
            />
          </>
        )}
      </GoogleOAuthProvider>
    </>
  );
};
