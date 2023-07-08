import React from 'react';
import "./Home.css"
import Nav from './Nav';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <Nav/>
    <div className='HomeBox'>
        <h1 className='mainHeading'>Welcome to JALA Academy</h1>
        <b className='bold1'>Do you want to Learn Selenium Automation completely with Practical Scenarios in 7 Days?</b>

        <div className="box1">
        You Learn Everything by doing projects if you are very serious to gat a software job in 60 days contact us : <a target='blank' href="http://jalatechnologies.com/contact-us.html"> http://jalatechnologies.com/contact-us.html</a>
        </div>

        <div className="box2">
            <b className='bold2'>For working people can double the salery in 60 Days</b>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home;