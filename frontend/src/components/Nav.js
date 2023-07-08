import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
const Nav = () => {
  return (
<>
<div>
            
            <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Create">Create</Link></li>
                <li><Link to="/EmployeesDetails">Search</Link></li>
                <li><Link to="/Multiple-Tabs">Multiple-Tabs</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/Tags">Tags</Link></li>
                <li><Link to="/Collapse">Collapse</Link></li>
                <li><Link to="/Image">Images</Link></li>
                <li><Link to="/Slider">Slider</Link></li>
                <li><Link to="/Popups">Popups</Link></li>
                <li><Link to="/Links">Links</Link></li>
                <li><Link to="/iFrames">iFrames</Link></li>
                <li><Link to="/Login">Logout</Link></li>
                 </ul>
        </div>
</>
  )
}

export default Nav;