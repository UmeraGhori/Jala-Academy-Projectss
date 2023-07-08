import { useState } from "react";
import "./Tabs.css";
import "../App.css";
import "./Iframes";
import Nav from "./Nav";
import Footer from "./Footer";

function Iframes() {

  return (
    <>
    <Nav/>
    <h1 className="heading">iFrames</h1>
    <div className="iframe">
    <iframe src="https://jala-academy.netlify.app/Home"></iframe>
    </div>
    <Footer/>
    </>
  );
}

export default Iframes;