import React, { useEffect, useState } from "react";
import "./Redirect.css";
import { useNavigate } from "react-router-dom";

export const Redirect = (props) => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();
  const timer_red_danger = {
    fontSize: "20px",
    fontFamily: "sans-serif",
    color: "red",
  };
  useEffect(() => {
    if (timer > 0) {
      const time = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(time);
    } else {
      navigate(`/${props.to_address}`)
    }
  }, [timer]);
  return (
    <div className="redirect_main_cont">
      <div className="redirect_cont">
        <div>
          <div style = {{justifyContent : "center", display : "flex", fontSize : "20px"}}>
            <span >!!{props.message}!!</span>
          </div>
          <div>
            <h4 style={timer_red_danger}>Redirecting You to {props.to_address} Page in</h4>
          </div>
          <div style = {{justifyContent : "center", display : "flex"}}>
            <h4 style={timer_red_danger}>{timer}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
