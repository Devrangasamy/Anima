import React from "react";
import './Button.css'
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <Link>
      <button className="btn">Signup</button>
    </Link>
  );
};

export default Button;
