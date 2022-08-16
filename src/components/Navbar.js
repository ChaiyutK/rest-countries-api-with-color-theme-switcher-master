import React, { useState } from 'react';
import "./Navbar.css";
import {BsMoon,BsMoonFill} from 'react-icons/bs';

const Navbar = () => {
    const [dlcheck,setDlcheck] = useState(0);

    const darkLightChange = () =>{
        if(dlcheck == 0)
        {
            document.getElementById("navbar-menu").classList.add("darkmode");
            document.getElementById("moon").style.display = "none";
            document.getElementById("moonfill").style.display = "block";
            setDlcheck(1);
        }
        else{
            document.getElementById("navbar-menu").classList.remove("darkmode");
            document.getElementById("moon").style.display = "block";
            document.getElementById("moonfill").style.display = "none";
            setDlcheck(0);
        }
        
    }
  return (
    <div id='navbar-menu' className='navbar-menu'>
        <div className='logo'>
            <h1>Where in the world?</h1>
        </div>
        <div className='dl-change' onClick={darkLightChange}>
        <BsMoon id='moon'/>
        <BsMoonFill id='moonfill' display={"none"}/>
        <p>Dark mode</p>
        </div>
    </div>
  )
}

export default Navbar