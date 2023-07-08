import Login from './components/Login';
import Admin from './components/Admin';
import Forgot from './components/forgot';
import React, {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import EmmployeesDetails from './components/EmployeesDetails';
import Update from './components/Update';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import Tags from './components/Tags';
import Menu from './components/Menu'
import Nav from './components/Nav';
import Image from './components/Image';
import Slider from "./components/Slider"
import Popup from './components/Popup';
import Links from './components/Links';
import Iframes from './components/Iframes';
import Collapse from './components/Collapse';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/Forgot' element={<Forgot/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Create' element={<Create/>}/>
      <Route path='/EmployeesDetails' element={<EmmployeesDetails/>}/>
      <Route path='/Update/:id' element={<Update/>}/>
      <Route element={<Nav/>}/>
      <Route path='/Multiple-Tabs' element={<Tabs/>} />
      <Route path='/Tags' element={<Tags/>} />
      <Route path='/Menu' element={<Menu/>} />
      <Route path='/Collapse' element={<Collapse/>} />
      <Route path='/Image' element={<Image/>} />
      <Route path='/Slider' element={<Slider/>} />
      <Route path='/Popups' element={<Popup/>} />
      <Route path='/Links' element={<Links/>} />
      <Route path='/iFrames' element={<Iframes/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
