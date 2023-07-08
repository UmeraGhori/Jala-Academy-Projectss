import {React, useState} from "react";
import Collapsible from "./Collapsible";
import Nav from "./Nav";
import "./Tabs.css";
import "../App.css";
import Footer from "./Footer";

function Collapse()
{
const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Nav/>
      <div className="wrapper">
        <h1>Autocomplete</h1>
      </div>
     <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
           Single Values
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Multiple Values
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
        <div className="sgst">
        <Collapsible/>
        </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
          <div className="sgst">
        <Collapsible/>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Collapse;



