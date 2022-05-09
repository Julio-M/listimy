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

function UserProfile ({currentUser}) {

  console.log(currentUser)
  
    return (
      <Box className='profilepage'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img className='cover-photo' src='https://res.cloudinary.com/dimfaeuml/image/upload/v1652013288/default_cover_hgufdb.png' alt='cover'/>
        </Grid>
        <Grid item xs={4}>
        <div className='profile'>
        <img className='profile-picture' src='https://res.cloudinary.com/dimfaeuml/image/upload/v1652014285/default_avatar_dnd2zs.png' alt='profile'/>
          <div className='presonalinfo'>
            <h3 className='username'>{currentUser.username}</h3>
            <p className='Location'>{currentUser.email}</p>
            <p className='account-type'>Type: {currentUser.services?"Freelancer":"Client"}</p>
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