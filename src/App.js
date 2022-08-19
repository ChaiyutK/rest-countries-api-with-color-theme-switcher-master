import logo from './logo.svg';
import './App.css';
import { useEffect, useState,createContext} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Container from './components/Container';
import { Routes, Route, Link } from "react-router-dom";
import Country from './components/Country';

export const darkThemeContext = createContext();

function App() {

  const [darkTheme,setDarkTheme] = useState(0);

  return (
    <darkThemeContext.Provider value={{darkTheme,setDarkTheme}}>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Container/>}/>
        <Route path="/country/:countryName" element={<Country/>}/>
     </Routes>
      
    </div>
    </darkThemeContext.Provider>
  );
}

export default App;
