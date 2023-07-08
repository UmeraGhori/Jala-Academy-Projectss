import React, { useState } from 'react'
import Nav from './Nav'
import "./Slider.css"
import Footer from './Footer'

const Slider = () => {

    const [data, setData] = useState(0)
  return (
    <>
    <Nav/>
    <div className="slider">
        <input type="range" className={data>50? "high" : "less"} min="0" max="100" value={data} onChange={(e) => setData(e.target.value)} />
        <h1>{data}</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Slider