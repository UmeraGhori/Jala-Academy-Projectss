import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import "./forgot.css";

const Forgot = () => {

    const [input, setInput] = useState({
        email: ""
    })

    const HandleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const CollectData = () => {
        if(input.email === "training@jalaacademy.com"){
            alert("Password has send Seccessfully!!!")
        } else{
            alert("Please Enter Valid Email")
        }
    }

  return (
    <div className='headers1'>
        <h1>Magnus</h1>
        <div className="boxes">
            <h5>Forgot Password</h5>
            <input className='minpts' onChange={HandleChange} type="email" name='email' value={input.email} placeholder='Email'/>
       
       <div className="bottom">
        <Link to="/" className='flink'>Back</Link>
        <button className='fbtn' onClick={CollectData}>Get Password</button>
       </div>
        </div>
    </div>
  )
}

export default Forgot;