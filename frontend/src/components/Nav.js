import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
const Nav = () => {
  return (
<>
<div>
            
            <ul className='nav-ul'>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Create">Create</Link></li>
                <li><Link to="/EmployeesDetails">Search</Link></li>
                <li><Link to="/">Logout</Link></li>
                 </ul>
        </div>
</>
  )
}

export default Nav;