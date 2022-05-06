import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Cards from "./Cards"


function Categories (props) {
  const arr = [0,1,2,3,4,5,6,7,8]

  const displayCards = arr.map(arr => <Grid item xs={12} sm={12} md={4}><Cards/></Grid>)
  return (
    <>
    <h3 className='title'>Services</h3>
    <Grid container spacing={2}>
        {displayCards}
     </Grid>
     </>
    );
}


export default Categories;