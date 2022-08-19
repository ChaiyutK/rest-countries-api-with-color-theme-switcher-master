import React from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
   const {countryName} = useParams();
  return (
    <div>
    Country
    <h1>{countryName}</h1>
    </div>
    
  )
}

export default Country