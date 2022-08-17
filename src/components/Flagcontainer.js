import React, { useEffect,useState } from 'react';
import axios from 'axios';
import "./Flagcontainer.css";

const Flagcontainer = () => {
    const [flag,setFlag] = useState([]);
    useEffect(()=>{
        axios.get(`https://restcountries.com/v2/all`).
        then(res=>{
            setFlag(res.data);
        })
    },[])

    const searchFlag = (e) =>{
        
        if(e.target.value == "")
        {
            axios.get(`https://restcountries.com/v2/all`).
        then(res=>{
            setFlag(res.data);
        })
        }
        else{
            axios.get(`https://restcountries.com/v2/name/${e.target.value}`).
        then(res=>{
            setFlag(res.data);
        })
        }
        
    }

    

  return (
    <div className='flagcontainer'>
        <input className='flagfilter' type="text" onChange={(event)=>{searchFlag(event)}} />
        {flag.map((val,i)=>{
            return <p key={i}>{val.name}</p>
        })}
    </div>
    
  )
}

export default Flagcontainer