import React, { useContext } from 'react';
import "./Container.css";
import { darkThemeContext } from '../App';
import Flagcontainer from './Flagcontainer';

const Container = () => {

  const {darkTheme,setDarkTheme} = useContext(darkThemeContext);
  return (
    <>
    {(darkTheme == 0 ? 
    <div className='container' id='container'>
      <Flagcontainer/>
    </div> : 
    <div className='container darkmodecontainer' id='container'>
        <Flagcontainer/>
    </div>)
  }
  </>
  )
}

export default Container