import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <NavLink to="Login">
      <div className="loginDiv nav">Login</div>
    </NavLink>
  );
}

export default Login;
