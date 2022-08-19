import React, { useContext, useEffect,useState } from 'react';
import axios from 'axios';
import "./Flagcontainer.css";
import {BsSearch} from 'react-icons/bs';
import { darkThemeContext } from '../App';
import { Link } from 'react-router-dom';

const Flagcontainer = () => {
    const [flag,setFlag] = useState([]);
    const {darkTheme,setDarkTheme} = useContext(darkThemeContext);

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
            }).catch(err=>{
               if(err.response){
                setFlag("err");
               }
            })
        }
        
    }

    const searchbyregion = (e) =>{
        if(e.target.value == "none")
        {
            axios.get(`https://restcountries.com/v2/all`).
            then(res=>{
                setFlag(res.data);
            })
        }
        else{
            axios.get(`https://restcountries.com/v2/region/${e.target.value}`).
            then(res=>{
                setFlag(res.data);
            })
        }
    }

    

  return (
    <div className='flagcontainer'>
        <div className="searchfilter">
            <div id="searchbar" className='searchbar'><BsSearch className='magnifying-glass' size={12}/><input id="searchbar-input" className='flagfilter' type="text" placeholder='Search for a country..' onChange={(event)=>{searchFlag(event)}} /></div>
            <select id="regionfilter" onChange={(event)=>{searchbyregion(event)}}>
                <option value="none">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
        
        <div className="flaglist-container">
        {
        (flag == "err" ? <p>not found</p>: flag.map((val,i)=>{
            if(darkTheme == 0)
            {
                return(
                    
                    <div key={i} className='flaglist'>
                    <Link to={`/country/${val.name}`}>
                        <img src={val.flags.png} />
                    </Link>
                        <h3>{val.name}</h3>
                        <p>Population: {(val.population).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <p>Region: {val.region}</p>
                        <p>Capital: {val.capital}</p>
                    
                    </div>
                )
            }
            else{
                return(
                    
                    <div key={i} className='flaglist darktheme'>
                        <Link to={`/country/${val.name}`}>
                        <img src={val.flags.png} />
                        </Link>
                        <h3>{val.name}</h3>
                        <p>Population: {(val.population).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <p>Region: {val.region}</p>
                        <p>Capital: {val.capital}</p>
                    
                    </div>
                    
                )
            }
        }))
        }
        </div>
    </div>
    
  )
}

export default Flagcontainer