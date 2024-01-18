import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <NavLink to="/Home">
      <div className="Home nav">Home</div>
    </NavLink>
  );
}

export default Home;
