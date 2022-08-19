import logo from './logo.svg';
import './App.css';
import { useEffect, useState,createContext} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Container from './components/Container';

export const darkThemeContext = createContext();

function App() {

  const [darkTheme,setDarkTheme] = useState(0);

  return (
    <darkThemeContext.Provider value={{darkTheme,setDarkTheme}}>
    <div className="App">
      <Navbar/>
      <Container/>
    </div>
    </darkThemeContext.Provider>
  );
}

export default App;
