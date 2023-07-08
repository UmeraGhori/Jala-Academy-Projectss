import React from 'react';
import "./Popup.css"
import Nav from './Nav';
import Footer from './Footer';

const Popup = () => {

    const PopupOne = () => {
        window.open("www.google.com", "_blank")
    }

    const alert = () => {
        window.alert("Welcome")
    }

    const confirm = () => {
        window.confirm("Please Confirm")
    }

    const prompt = () => {
        window.prompt("Please Enter your Full Name");
    }

  return (
    <>
    <Nav/>
    <div className='popup'>
    <button className='popup-btn' onClick={PopupOne}>Popup One</button>
        <button className='popup-btn' onClick={alert}>Alert</button>
        <button className='popup-btn' onClick={confirm}>Confirm</button>
        <button className='popup-btn' onClick={prompt}>Prompt</button>
    </div>

    <Footer/>
    </>
  )
}

export default Popup