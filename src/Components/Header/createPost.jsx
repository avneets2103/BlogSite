import React from "react";
import { NavLink } from "react-router-dom";

function CreatePost() {
  return (
    <NavLink to="CreatePost/">
      <div className="createPostDiv nav">Create Blog</div>
    </NavLink>
  );
}

export default CreatePost;
