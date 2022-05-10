import React from "react";
import './cards.css'
import Paper from '@mui/material/Paper';

function Cards ({categories}) {
  const {category_picture,category_name} = categories

    return (
      <div className="card">
        <img className='picture' src={category_picture} alt='myimgae'/>
        <div class="text">{category_name}</div>
      </div>
    );
}

export default Cards;