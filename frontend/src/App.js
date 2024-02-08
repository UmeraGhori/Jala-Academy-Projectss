import Login from './components/Login';
import React, {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import EmmployeesDetails from './components/EmployeesDetails';
import Update from './components/Update';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Create' element={<Create/>}/>
      <Route path='/EmployeesDetails' element={<EmmployeesDetails/>}/>
      <Route path='/Update/:id' element={<Update/>}/>
      <Route element={<Nav/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
