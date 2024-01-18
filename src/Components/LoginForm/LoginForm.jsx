import React, { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import "./LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { store_login } from "../../../Redux/Features/authSlice";
import authService from "../../Appwrite/authService";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    authService.Login({ email, password})
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
    <div className="LoginInside">
      <div className="Loginform">
        <form onSubmit={(e) => handleLogin(e)}>
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
          <button type="submit">Login</button>
          <p>
            Not an old user? <NavLink to="/SignUp">SignUp</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
