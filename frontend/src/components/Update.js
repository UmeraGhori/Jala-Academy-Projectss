import {React, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Update = () => {
//   const userId = JSON.parse(localStorage.getItem("employees"))._id;

  const navigate = useNavigate();

  const updateData = async () => {
    console.log(input);
    let result = await fetch(`http://localhost:8000/employee/${params.id}`,{
      method: "Put",
      body: JSON.stringify(input),
      headers: {
        "Content-type": "Application/json"
      }
    });
    result = await result.json();
    if(result){
      navigate("/");
      alert("Employee Details are Updated")
    };
  };
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
    Skills: "",
  })

  const params = useParams();

  useEffect(()=>{
    getDetails();
  }, []);

  const getDetails = async () => {
    let result = await fetch(`http://localhost:8000/employee/${params.id}`);
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
      <label className='ladd'>Date Of Birth :</label>
      <input className="iadd" type="date" onChange={HandleChange} placeholder='Add Category' value={input.DateOfBirth} name="DateOfBirth" />
      </div>
<hr />
<div className="details">
      <label className='ladd'>Gender :</label>
      Female
      <input className="iadd" type="radio" onChange={HandleChange} name='Gender' value="Female"/>

      Male
      <input className="iadd" type="radio" onChange={HandleChange} name='Gender' value="Male"/>
      </div>
<hr />
<div className="details">
      <label className='ladd'>Address :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Product Name' value={input.Address} name="Address" />
    </div>

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
<hr />

<div className="details">
      <label className='ladd'>City :</label>
      <select className="iadd" type="text" onChange={HandleChange} name="City">
      <option value={input.City}>--Select Country--</option>
    <option value="Agar">Agar</option>
    <option value="Ajaigarh">Ajaigarh</option>
    <option value={input.City}>Akodia</option>
    <option value={input.City}>Alampur</option>
    <option value={input.City}>Alirajpur</option>
    <option value={input.City}>Alot</option>
    <option value={input.City}>Amanganj</option>
    <option value={input.City}>Amarkantak</option>
    <option value={input.City}>Amarpatan</option>
</select>
      </div>
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
<hr />
<button onClick={updateData} className='btn-add'>Update</button>
    </div>
    <Footer/>
    </>
  )
}

export default Update;