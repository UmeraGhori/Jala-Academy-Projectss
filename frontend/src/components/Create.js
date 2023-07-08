import {React, useState} from 'react'
import Nav from './Nav';
import Footer from './Footer';
import "./Create.css";

const Create = () => {
  const [error, setError] = useState(false);


  const collectData = async () => {
    console.log(input)

    let result = await fetch("http://localhost:8000/addEmployee", {
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

  const [input, setInput] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    MobileNumber: "",
    DateOfBirth: "",
    Gender: "",
    Address: "",
    Country: "",
    City: "",
    Skills: ""
  })

  const HandleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
    <Nav/>
    <div className='add'>
      <h1 className='h1add'>Add Employee Details</h1>
      <div className="details">
      <label className='ladd'>First Name :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add First Name' value={input.FirstName} name="FirstName" />
    </div>
    {error && input.FirstName==="" && <span className='span-box'>Enter First Name</span>}
<hr />

<div className="details">
      <label className='ladd'>Last Name :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Last Name' value={input.LastName} name="LastName" />
    </div>
    {error && input.LastName==="" && <span className='span-box'>Enter Last Name</span>}
<hr />

<div className="details">
      <label className='ladd'>Email :</label>
      <input className="iadd" type="email" onChange={HandleChange} placeholder='Add Email' value={input.Email} name="Email" />
      </div>
      {error && input.Email==="" && <span className='span-box'>Enter Valid Email</span>}
<hr />

<div className="details">
      <label className='ladd'>Mobile Number :</label>
      <input className="iadd" type="tel" onChange={HandleChange} placeholder='Add Mobile Number' value={input.MobileNumber} name="MobileNumber" />
      </div>
      {error && input.MobileNumber==="" && <span className='span-box'>Enter Valid Mobile Number</span>}
<hr />

<div className="details">
      <label className='ladd'>Date Of Birth :</label>
      <input className="iadd" type="date" onChange={HandleChange} placeholder='Add Date Of Birth' value={input.DateOfBirth} name="DateOfBirth" />
      </div>
      {/* {error && input.DateOfBirth==="" && <span className='span-box'>Enter Valid Date of Birth</span>} */}
<hr />
<div className="details">
      <label className='ladd'>Gender :</label>
      Female
      <input className="iadd" type="radio" onChange={HandleChange} name='Gender' value="Female"/>

      Male
      <input className="iadd" type="radio" onChange={HandleChange} name='Gender' value="Male"/>
      </div>
      {/* {error && input.Gender==="" && <span className='span-box'>Select Valid Gender</span>} */}
<hr />
<div className="details">
      <label className='ladd'>Address :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Address' value={input.Address} name="Address" />
    </div>
    {error && input.Address==="" && <span className='span-box'>Enter Valid Address</span>}

<hr />

<div className="details">
      <label className='ladd'>Country :</label>
      <select className="iadd" type="text" onChange={HandleChange} name="Country">
      <option value={input.Country}>--Select Country--</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Canada">Canada</option>
      <option value="China">China</option>
      <option value="France">France</option>
      <option value="India">India</option>
      <option value="Japan">Japan</option>
      <option value="Nepal">Nepal</option>
      <option value="Sri Lanka">Sri Lanka</option>
      <option value="UK">UK</option>
      <option value="USA">USA</option>
      </select>
      </div>
      {/* {error && input.Country==="" && <span className='span-box'>Select Valid Country</span>} */}
<hr />

<div className="details">
      <label className='ladd'>City :</label>
      <select className="iadd" type="text" onChange={HandleChange} name="City">
      <option value={input.City}>--Select City--</option>
    <option value="Agar">Agar</option>
    <option value="Ajaigarh">Ajaigarh</option>
    <option value="Akodia">Akodia</option>
    <option value="Alampur">Alampur</option>
    <option value="Alirajpur">Alirajpur</option>
    <option value="Alot">Alot</option>
    <option value="Amanganj">Amanganj</option>
    <option value="Amarkantak">Amarkantak</option>
    <option value="Amarpatan">Amarpatan</option>
</select>
      </div>
      {/* {error && input.City==="" && <span className='span-box'>Select Valid City</span>} */}
<hr />

<div className="details">
      <label className='ladd'>Skills :</label>
      <select className="iadd" type="text" onChange={HandleChange} name="Skills">
      <option value={input.Skills}>--Select Skills</option>
      <option value="Html">Html</option>
      <option value="Javascript">Javascript</option>
      <option value="Css">Css</option>
      <option value="React.js">React.js</option>
      </select>
    </div>
    {/* {error && input.Skills==="" && <span className='span-box'>Select valid Skills</span>} */}

<hr />
<button onClick={collectData} className='btn-add create'>Create Employee</button>
    </div>
    <Footer/>
    </>
  )
}

export default Create