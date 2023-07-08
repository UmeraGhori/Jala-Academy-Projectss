import {React, useState} from 'react';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const HandleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate()  

    const CollectData = () => {
        if(input.email === "training@jalaacademy.com" && input.password === "jobprogram"){
            navigate("/")
        } else{
            alert("Please Enter Correct Details")
        }
    }

    const Fchange = () => {
        navigate("/Forgot")
    }
    
  return (
    <>

 <div className="header">
    <div>
        <h1>JALA ACADEMY</h1>
    </div>
    <div>
        <h3>Login Credentials</h3>
    </div>
    <div>
        Email : training@jalaacademy.com
        <p>Password : jobprogram</p>
    </div>
    <div className='highlight'>
    Learn Everything on Real-Time Scenarios
    </div>
  </div>

  <div className="forms">
    <form className='inside'>
        <h4>Sign In</h4>
        <div className='inpt'>
            <input className='minpt' onChange={HandleChange} name='email' value={input.email} type="email" placeholder='Email or Mobile No'/>
            <input className='minpt' onChange={HandleChange} name='password' type="password" value={input.password} placeholder='Password'/>
        </div>
        {/* <div className="check">
            <div className='rembr'>
            <input type="checkbox"/>
            <label>Remember me</label>
        </div>
        <div>
        <button type="submit" className='cbtn' onClick={CollectData}>Sign In</button>
        </div>
        </div> */}


<div className="checks">
    <input type="checkbox" className='checks-inpt' />
            <label className='rembrs'>Remember me</label>
        <button type="submits" className='cbtns' onClick={CollectData}>Sign In</button>
        </div> 

        <div className="btm">
            <div className='btm1'>
                <h5>-OR-</h5>
            </div>
                <button className='btm2' onClick={Fchange}>Forgot Password</button>
            <div className='btm3'>
                <Link to="/Admin" className='admin'>Admin Login</Link>
            </div>
        </div>
    </form>
  </div>

  <footer>
    <div className='footer'>
    JALA Academy offers Job Guaranteed Programs for Freshers to 12 years’ experience on Full Stack Development / Automation Testing / Dev-Ops / QA/ SDET/Cyber Security / RPA / Cloud Technologies. Training would be completely on live Project scenarios Read our website JALA Academy for more details : https://jalaacademy.com/
    </div>
  </footer>
</>
  )
}

export default Login;