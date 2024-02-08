import { React, useState } from 'react'
import Nav from './Nav';
import Footer from './Footer';
import "./Create.css";

const Create = () => {
  const [error, setError] = useState(false);

  const collectData = async () => {
    // Check if any of the required fields are empty
    if (!input.FirstName || !input.LastName || !input.Email || !input.MobileNumber || !input.Gender || !input.Address || !input.City || !input.Skills) {
      setError(true);
    }

    // Assuming other validation checks here if needed
    {
      console.log(input)

    let result = await fetch("https://jala-academy-vo0h.onrender.com/addEmployee", {
      method: "post",
      body: JSON.stringify(input),
      headers: {
        "Content-type": "application/json"
      }
    });
    result = await result.json();
    console.log(result);
    alert("Employee Details are Created")
  }
}

  const [input, setInput] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    MobileNumber: "",
    // DateOfBirth: "",
    Gender: "",
    Address: "",
    // Country: "",
    City: "",
    Skills: ""
  })

  const HandleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    // Reset error state when input changes
    setError(false);
  }

  return (
    <>
      <Nav />
      <div className='add'>
        <h1 className='h1add'>Add Employee Details</h1>
        <div className="details">
          <label className='ladd'>First Name :</label>
          <input className="iadd" type="text" onChange={HandleChange} placeholder='Add First Name' value={input.FirstName} name="FirstName" />
        </div>
        {error && !input.FirstName && <span className='span-box'>Enter First Name</span>}
        <hr />

        <div className="details">
          <label className='ladd'>Last Name :</label>
          <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Last Name' value={input.LastName} name="LastName" />
        </div>
        {error && !input.LastName && <span className='span-box'>Enter Last Name</span>}
        <hr />

        <div className="details">
          <label className='ladd'>Email :</label>
          <input className="iadd" type="email" onChange={HandleChange} placeholder='Add Email' value={input.Email} name="Email" />
        </div>
        {error && !input.Email && <span className='span-box'>Enter Valid Email</span>}
        <hr />

        <div className="details">
          <label className='ladd'>Mobile Number :</label>
          <input className="iadd" type="tel" onChange={HandleChange} placeholder='Add Mobile Number' value={input.MobileNumber} name="MobileNumber" />
        </div>
        {error && !input.MobileNumber && <span className='span-box'>Enter Valid Mobile Number</span>}
        <hr />

        {/* Other input fields... */}

        <div className="details">
          <label className='ladd'>Skills :</label>
          <select className="iadd" onChange={HandleChange} name="Skills" value={input.Skills}>
            <option value="">--Select Skills--</option>
            <option value="Html">Html</option>
            <option value="Javascript">Javascript</option>
            <option value="Css">Css</option>
            <option value="React.js">React.js</option>
          </select>
        </div>
        {error && !input.Skills && <span className='span-box'>Select valid Skills</span>}
        <hr />

        <button onClick={collectData} className='btn-add create'>Create Employee</button>
      </div>
      <Footer />
    </>
  )
}

export default Create;
