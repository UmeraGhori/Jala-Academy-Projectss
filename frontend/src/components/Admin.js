import React from 'react'
import { Link } from 'react-router-dom'
import "./Admin.css";

const Admin = () => {
  return (
    <>
    <div className='headers1'>
        <h1>Magnus</h1>
        <div className="boxes">
            <h5>Admin - Sign in</h5>
            <input className='minpts' type="email" placeholder='Email'/>
            <input className='minpts' type="password" placeholder='Password'/>
       
       <div className="bottom">
        <Link to="/" className='flink'>Back</Link>
        <button className='fbtn'>Sign In</button>
       </div>
        </div>
    </div>

    <footer>
    <div className='Afooter'>
    JALA Technologies offers Job Guaranteed Programs for Freshers to 10 years’ experience on JAVA/.Net / Automation Testing / Dev-Ops / Middleware Technologies / WebLogic / JBoss / Tomcat / Python/AI/DataScience and for those who want to be a software engineer in 90 Days. Contact Details: http://jalatechnologies.com/contact-us.html
    </div>
  </footer>
    </>
  )
}

export default Admin;