import {React, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const Update = () => {
//   const userId = JSON.parse(localStorage.getItem("employees"))._id;

  const navigate = useNavigate();

  const updateData = async () => {
    console.log(input);
    let result = await fetch(`https://jala-academy-vo0h.onrender.com/employee/${params.id}`,{
      method: "Put",
      body: JSON.stringify(input),
      headers: {
        "Content-type": "Application/json"
      }
    });
    result = await result.json();
    if(result){
      navigate("/EmployeesDetails");
      alert("Employee Details are Updated")
    };
  };
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
    Skills: "",
  })

  const params = useParams();

  useEffect(()=>{
    getDetails();
  }, []);

  const getDetails = async () => {
    let result = await fetch(`https://jala-academy-vo0h.onrender.com/employee/${params.id}`);
    result = await result.json();
    setInput(result)
  }

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
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Product Name' value={input.FirstName} name="FirstName" />
    </div>
<hr />

<div className="details">
      <label className='ladd'>Last Name :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Product Name' value={input.LastName} name="LastName" />
    </div>
<hr />

<div className="details">
      <label className='ladd'>Email :</label>
      <input className="iadd" type="email" onChange={HandleChange} placeholder='Add price' value={input.Email} name="Email" />
      </div>
<hr />

<div className="details">
      <label className='ladd'>Mobile Number :</label>
      <input className="iadd" type="tel" onChange={HandleChange} placeholder='Add price' value={input.MobileNumber} name="MobileNumber" />
      </div>
<hr />

<div className="details">
      <label className='ladd'>Skills :</label>
      <select className="iadd" type="text" onChange={HandleChange} name="Skills">
      <option>{input.Skills}</option>
      <option value="Html">Html</option>
      <option value="Javascript">Javascript</option>
      <option value="Css">Css</option>
      <option value="React.js">React.js</option>
      </select>
    </div>
<hr />
<button onClick={updateData} className='btn-add create'>Update</button>
    </div>
    <Footer/>
    </>
  )
}

export default Update;