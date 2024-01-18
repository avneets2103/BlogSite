import React from "react";

function ImageShower(props) {
  const img = props.img;
  return (
    <div className="imageShowerBox">
      <img className="imageShower" src={img} alt="Your image" width={"300px"} />
    </div>
  );
}

export default ImageShower;
