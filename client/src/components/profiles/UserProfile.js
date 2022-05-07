import React, { useState } from "react";
import './userprofile.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function UserProfile (props) {
  
    return (
      <Box className='profilepage'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img className='cover-photo' src='https://wallpapercave.com/wp/wp3313545.jpg' alt='cover'/>
        </Grid>
        <Grid item xs={4}>
        <div className='profile'>
        <img className='profile-picture' src='https://media-exp1.licdn.com/dms/image/C4D03AQHYejL74A-4xw/profile-displayphoto-shrink_400_400/0/1641158640636?e=1657152000&v=beta&t=lSPRMxV2W9vHiJbmqJ_EjF4PXhA8sI8HCR8KtmuoDu0' alt='profile'/>
          <div className='presonalinfo'>
            <h3 className='username'>Xhulio Mihali</h3>
            <p className='Location'>New York City, NY</p>
            <p className='account-type'>Client</p>
            <p className='rating'>4.5/5</p>
          </div>
        </div>
        </Grid>
        <Grid item xs={12}>
          <Item>Previous bookings</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Reviews</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Chat</Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default UserProfile;