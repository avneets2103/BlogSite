import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignUpForm.css";
import { useDispatch, useSelector } from "react-redux";
import { store_login } from "../../../Redux/Features/authSlice";
import authService from "../../Appwrite/authService";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    authService.createAccount({ email, password, name })
      .then((res) => {
        dispatch(store_login({ userData }));
        console.log(res);
        navigate("/Home");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="SignUpInside">
      <div className="SignUpform">
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="inputs">
            <label htmlFor="Name">Name</label>
            <br />
            <input
              type="text"
              name="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="Email">Email</label>
            <br />
            <input
              type="text"
              name="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="Password">Password</label>
            <br />
            <input
              type="password"
              name="passInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign Up</button>
          <p>
            Exsisting user? <NavLink to="/Login">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
