import React from "react";
import './cards.css'
import Paper from '@mui/material/Paper';

function Cards (props) {
    return (
      <div className="card">
        <img className='picture' src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt='myimgae'/>
        <div class="text">Centered</div>
      </div>
    );
}

export default Cards;