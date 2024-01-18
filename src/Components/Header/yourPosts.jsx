import React from "react";
import { NavLink } from "react-router-dom";

function YourPosts() {
  return (
    <NavLink to="/YourPosts">
      <div className="yourPostsDiv nav">Your Blogs</div>
    </NavLink>
  );
}

export default YourPosts;
