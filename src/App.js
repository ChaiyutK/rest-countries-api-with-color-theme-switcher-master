import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Container from './components/Container';


function App() {
  useEffect(()=>{
  axios.get("https://restcountries.com/v2/all").
    then(res=>{
      console.log(res.data)
    })
  
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Container/>
    </div>
  );
}

export default App;
