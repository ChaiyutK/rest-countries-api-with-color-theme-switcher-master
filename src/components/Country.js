import React, { useContext, useEffect,useState } from 'react'
import App, { darkThemeContext } from '../App';
import { useParams,Link, Route, Routes  } from 'react-router-dom'
import "./Country.css"
import axios from 'axios';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import Container from './Container';

const Country = () => {
  const {darkTheme,setDarkTheme} = useContext(darkThemeContext);
  const [countryData,setCountryData] = useState([]);
  const {countryName} = useParams();
  
  useEffect(() =>{
    axios.get(`https://restcountries.com/v3.1/name/${countryName}`).
    then(res=>{
      setCountryData(res.data);
      console.log("test1");
    })
  },[countryName])

  const currencyFn = (val) =>{
    for(let index in val)
                {
                  return val[index].name;
                }
  }

  const languageFn = (val) =>{
    let data = "";
    for(let index in val)
    {
      data += val[index] + " " 
    }
    return data.trim().replaceAll(" ",", ");
  }

  return (
    <>
    {(darkTheme == 0 ? 
    <div className='container' id='container'>
      <div className="country-container">
      <div className="backbutton-container">
      <Link to={`/`}>
        <button className='backbutton'>
          <AiOutlineArrowLeft className='backarrow'/>
          <p>Back</p>
        </button>
        </Link>
      </div>
      {countryData.map((val,i)=>{
        return(
        <div key={i} className="countrydetail-container">
          <img src={val.flags.png} alt=""/>
          <div className="countrydetail">
            <h1>{val.name.common}</h1>
          <div className='countrydetail-div'>
          <ul className='countrydetail-ul'>
              <li><b>Native Name: </b><span>{val.altSpellings[1]}</span></li>
              <li><b>Population: </b><span>{(val.population).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></li>
              <li><b>Region: </b><span>{val.region}</span></li>
              <li><b>Sub Region: </b><span>{val.subregion}</span></li>
              <li><b>Capital: </b><span>{val.capital}</span></li>
            </ul>
            <ul className='countrydetail-ul'>
              <li><b>Top Level Domain: </b><span>{val.tld[0]}</span></li>
              <li><b>Currencies: </b><span>{currencyFn(val.currencies)}</span></li>
              <li><b>Languages: </b><span>{languageFn(val.languages)}</span></li>
            </ul>
          </div>
            <div className="border-container">
              <b>Border Countries:</b>
              <Link to={`/country/america`}>
                    <button>america</button>
              </Link>

             {/*
              <Routes>
                <Route path="/" element={<Container/>}/>
              </Routes>
        */}

            </div>
          </div>
        </div>
        );
      })}
      
      </div>
      
    </div> : 
    <div className='container darkmodecontainer' id='container'>
      <h1>{countryName}</h1>
    </div>)
  }
  </>
    
  )
}

export default Country