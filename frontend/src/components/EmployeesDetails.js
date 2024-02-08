import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./EmployeesDetails.css";
import Nav from './Nav';
import Footer from './Footer';

const EmmployeesDetails = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    let result = await fetch("https://jala-academy-vo0h.onrender.com/employees");
      result = await result.json();
      setData(result);
  }
  console.log(data);

  const DeleteData = async (id) => {
    let result = await fetch(`https://jala-academy-vo0h.onrender.com/employee/${id}`, {
      method: "Delete"
    });
    result = await result.json();
    if(result){
      getData();
    }
  }
  const SearchHandle = async (event) => {
    let key = event.target.value;
    if(key){
    let result = await fetch(`https://jala-academy-vo0h.onrender.com/search/${key}`);
    result = await result.json();
    if(result){
      setData(result);
    }
    } else{
      getData();
    }
  }
  return (
  <>
  <Nav/>
  <div className='employee-list'>
    <h1>Employee List</h1>
    <input type="text" placeholder='Search Employee' className='searchEmployee' onChange={SearchHandle} />
    <ul>
      <li>S.No.</li>
      <li>First Name</li>
      <li>Last Name</li>
      <li>Email</li>
      <li>Mob No.</li>
      <li>Skills</li>
    </ul>
  { data.length>0 ? data.map((item, index)=>
    <ul key={item.FirstName}>
    <li>{index+1}</li>
    <li>{item.FirstName}</li>
    <li>{item.LastName}</li>
    <li>{item.Email}</li>
    <li>{item.MobileNumber}</li>
    <li>{item.Skills}</li>
    <li className='btns'>
    <button className='delete' onClick={() => DeleteData(item._id)}>Delete</button>
        <a href={"/Update/" + item._id}>Edit</a>
    </li>
  </ul>
  ) : <h1>No Result Found</h1>
  }
  </div>

  <Footer/>

  </>
  )
}

export default EmmployeesDetails;