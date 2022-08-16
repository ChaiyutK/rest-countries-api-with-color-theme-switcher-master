import React, { useState } from 'react';
import "./Navbar.css";
import {BsMoon} from 'react-icons/bs';

const Navbar = () => {
    const [dlcheck,setDlcheck] = useState(0);

    const darkLightChange = () =>{
        if(dlcheck == 0)
        {
            document.getElementById("navbar-menu").classList.add("darkmode");
            setDlcheck(1);
        }
        else{
            document.getElementById("navbar-menu").classList.remove("darkmode");
            setDlcheck(0);
        }
        
    }
  return (
    <div id='navbar-menu' className='navbar-menu'>
        <div className='logo'>
            <h1>Where in the world?</h1>
        </div>
        <div className='dl-change' onClick={darkLightChange}>
        <BsMoon/>
        <p>Dark mode</p>
        </div>
    </div>
  )
}

export default Navbar