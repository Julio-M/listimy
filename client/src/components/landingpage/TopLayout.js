import React, {useState } from "react";
import TextField from '@mui/material/TextField';
import './landingpage.css'
import Grid from '@mui/material/Grid';


function TopLayout () {

    return (
      <>
      <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '50vh' }}
    >
        <Grid item xs={4}>
            <TextField style={{width:'100%'}}id="service" label="Service" />  
        </Grid>
      </Grid>
      </>
    );
}

export default TopLayout;