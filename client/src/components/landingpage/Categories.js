import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Cards from "./Cards"


function Categories ({categories}) {

  const displayCards = categories.map(cat => <Grid item xs={12} sm={12} md={4}><Cards categories={cat}/></Grid>)
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