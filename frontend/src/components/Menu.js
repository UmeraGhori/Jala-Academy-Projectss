import {React, useState} from 'react'
import Footer from './Footer';
import Nav from './Nav';
import "./Menu.css"

function Menu() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };

    const [Topic, SetTopic] = useState(1);
  
    const Topics = (index) => {
      SetTopic(index);
    };
  
    return (
      <>
      <div>
      <Nav/>
      <h1 className="headings">Menu</h1>
       <div className="containers">
        <div className="blocs-tabs">
          <button
            className={toggleState === 1 ? "tabss actives-tabs" : "tabss"}
            onClick={() => toggleTab(1)}
          >
            Single Menus
          </button>
          <button
            className={toggleState === 2 ? "tabss actives-tabs" : "tabss"}
            onClick={() => toggleTab(2)}
          >
            Sub Menus
          </button>
        </div>
  
        <div className="contents-tabs">

          <div className="contents-tabs">
          <div
            className={Topic === 1 ? "contents  active-contents" : "contents"}
          >
            <p className='topicsPara'>You Have Selected Testing Menu Option.</p>
          </div>
          <div
            className={Topic === 2 ? "contents  active-contents" : "contents"}
          >
            <p className='topicsPara'>You Have Selected Java Menu Option.</p>
          </div>
          <div
            className={Topic === 3 ? "contents  active-contents" : "contents"}
          >
            <p className='topicsPara'>You Have Selected .Net Menu Option.</p>
          </div>
          <div
            className={Topic === 4 ? "contents  active-contents" : "contents"}
          >
            <p className='topicsPara'>You Have Selected Data Base Menu Option.</p>
          </div>
          </div>
          </div>
          <div className="contents-tabs">
          <div
            className={toggleState === 2 ? "contents  active-contents" : "contents"}
          >
            <ul className='ulist'>
                <li className={Topic === 1 ? "tabss actives-tabs" : "tabss"}
            onClick={() => Topics(1)}>Testing
            <ul className='Hvr'>
                <li>Selenium</li>
                <li>Manual Testing</li>
                <li>DB Testing</li>
                <li>Unit Testing</li>
            </ul>
            </li>
                <li className={Topic === 2 ? "tabss actives-tabs" : "tabss"}
            onClick={() => Topics(2)}>Java
            <ul className='Hvr'>
                <li>Adv Java</li>
                <li>Core Java</li>
                <li>Spring</li>
                <li>Hibernate</li>
            </ul>
            </li>
                <li className={Topic === 3 ? "tabss actives-tabs" : "tabss"}
            onClick={() => Topics(3)}>.Net
            <ul className='Hvr'>
                <li>C#</li>
                <li>ASP.NET</li>
                <li>ADO.NET</li>
                <li>MVC</li>
            </ul>
            </li>
                <li className={Topic === 4 ? "tabss actives-tabs" : "tabss"}
            onClick={() => Topics(4)}>Data Base
            <ul className='Hvr'>
                <li>SQL</li>
                <li>My Sql</li>
                <li>Oracle</li>
                <li>H2</li>
            </ul>
            </li>
            </ul>
            </div>
          </div>


          <div className="contents-tabs">
          <div
            className={toggleState === 1 ? "contents  active-contents" : "contents"}
          >
            <ul className='ulist'>
                <li className={Topic === 1 ? "tabss actives-tabs" : "tabss"}
            onClick={() => Topics(1)}>Testing
            </li>
                <li className={Topic === 2 ? "tabss actives-tabs" : "tabss"}
            onClick={() => Topics(2)}>Java
            </li>
                <li className={Topic === 3 ? "tabss actives-tabs" : "tabss"}
            onClick={() => Topics(3)}>.Net
            </li>
                <li className={Topic === 4 ? "tabss actives-tabs" : "tabss"}
            onClick={() => Topics(4)}>Data Base
            </li>
            </ul>
            </div>
          </div>


      </div>
      </div>
      
      <Footer/>
      </>
    )
  }
  
  export default Menu;