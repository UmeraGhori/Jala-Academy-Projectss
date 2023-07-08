import { useState } from "react";
import "./Tabs.css";
import "../App.css"
import Nav from "./Nav";
import Footer from "./Footer";

function Links() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <Nav/>
    <h1 className="heading">Links</h1>
     <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
           Working Links
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Image Links
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Status Codes
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <div className="links">
            <a href="https://www.workinglinks.co.uk/" target="_blank" rel="noopener noreferrer">Link 1</a>
          <a href="https://www.google.co.in/" target="_blank" rel="noopener noreferrer">Link 2</a>
          <a href="https://jalatechnologies.com/" target="_blank" rel="noopener noreferrer">Link 1</a>
            </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="links">
            <a href="https://www.google.co.in/" target="_blank" rel="noopener noreferrer"><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" /></a>
          <a href="https://www.linkedin.com/home/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="Linkedin" /></a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" target="_blank" rel="noopener noreferrer"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="Twitter" /></a>
            </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="links">
            <a href="https://www.restapitutorial.com/httpstatuscodes.html" target="_blank" rel="noopener noreferrer">200</a>
          <a href="https://magnus.jalatechnologies.com/ErrorHandler/RedirectPermanently" target="_blank" rel="noopener noreferrer">301</a>
          <a href="https://magnus.jalatechnologies.com/ErrorHandler/NotFound" target="_blank" rel="noopener noreferrer">404</a>
          <a href="https://magnus.jalatechnologies.com/ErrorHandler/InternalServerError" target="_blank" rel="noopener noreferrer">500</a>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Links;