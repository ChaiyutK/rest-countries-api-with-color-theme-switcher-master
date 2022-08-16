import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';


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
    </div>
  );
}

export default App;
