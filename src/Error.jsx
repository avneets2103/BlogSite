import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import './Error.css'

function Error() {
  return (
    <>
      <Header />
      <div className="errorPage">
        <img src="../public/browser.png" alt="" width={"200px"}/>
      </div>
      <Footer />
    </>
  );
}

export default Error;
