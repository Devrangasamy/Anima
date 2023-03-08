import React from "react";
import "./Forgetpassword.css";
export const Forgetpassword = () => {
  return (
    <div className="forgetpassword-container">
      <form className="forgetpassword-form">
        <div className="forgetpassword-header">
          <p>
            <span className="forgetpassword-header-text">Reset Password</span>
          </p>
        </div>
        <div className="forgetpasswordinput-containter">
          {/* <label>
            <span className="forgetpassword-label">
              Enter Email
            </span>
          </label> */}
          <>
            <legend>Email?</legend>
           
          </>
        </div>
      </form>
    </div>
  );
};
