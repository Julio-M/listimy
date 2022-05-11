import React from "react";
import './cards.css'
import Paper from '@mui/material/Paper';
import { useNavigate, Link, useLocation } from "react-router-dom";


function Cards ({categories, setSearchParams}) {
  let navigate = useNavigate()
  const {category_picture,category_name} = categories
  
  

  const handleClick = (e) => {
   
    
    
    setSearchParams({category_name:category_name})
    navigate({
      pathname: `/places?category_name=${category_name}`
    })
    
  }
  
    return (

      <div className="card" onClick={handleClick}>
        <img className='picture' src={category_picture} alt='myimgae'/>
        <div class="text">{category_name}</div>
      </div>
     
    );
}

export default Cards;