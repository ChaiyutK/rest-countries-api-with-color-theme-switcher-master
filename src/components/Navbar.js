import React, { useContext, useState } from 'react';
import "./Navbar.css";
import {BsMoon,BsMoonFill} from 'react-icons/bs';
import { darkThemeContext } from '../App';

const Navbar = () => {
    
    const {darkTheme,setDarkTheme} = useContext(darkThemeContext);


    const darkLightChange = () =>{
        if(darkTheme == 0)
        {
            document.getElementById("navbar-menu").classList.add("darkmode");

            document.getElementById("container").style.backgroundColor = "hsl(207, 26%, 17%)";
            document.getElementById("container").style.color = "white";

            document.getElementById("regionfilter").style.backgroundColor = "hsl(209, 23%, 22%)";
            document.getElementById("regionfilter").style.color = "white";
            
            document.getElementById("searchbar").style.backgroundColor = "hsl(209, 23%, 22%)";
            document.getElementById("searchbar").style.color = "white";

            document.getElementById("searchbar-input").style.backgroundColor = "hsl(209, 23%, 22%)";
            document.getElementById("searchbar-input").style.color = "white";

            document.getElementById("moon").style.display = "none";
            document.getElementById("moonfill").style.display = "block";
            setDarkTheme(1);
        }
        else{
            document.getElementById("navbar-menu").classList.remove("darkmode");

            document.getElementById("container").style.backgroundColor = "hsl(0, 0%, 98%)";
            document.getElementById("container").style.color = "black";

            document.getElementById("regionfilter").style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById("regionfilter").style.color = "black";

            document.getElementById("searchbar").style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById("searchbar").style.color = "black";

            document.getElementById("searchbar-input").style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById("searchbar-input").style.color = "black";

            document.getElementById("moon").style.display = "block";
            document.getElementById("moonfill").style.display = "none";
            setDarkTheme(0);
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