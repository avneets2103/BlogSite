import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store_logout } from "../../../Redux/Features/authSlice";
import authService from "../../Appwrite/authService";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    authService
      .logout()
      .then((res) => {
        dispatch(store_logout());
        console.log(res);
        navigate("Login/");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <NavLink to="Login/">
      <div className="logoutDiv nav" onClick={handleLogout}>
        Logout
      </div>
    </NavLink>
  );
}

export default Logout;
