import React, { useState } from "react";
import './freelancerviewonly.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ServiceTable from "../servicestable/ServiceTable";
import ServiceForm from "../servicestable/ServiceForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height:300,
  width: 300,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:"center",
};

function FreelancerViewOnly ({currentUser}) {

  const [myServices, setMyServices] = useState(currentUser.services)

  const [which, setWhich] = useState('profile')

  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    const name = e.target.name
    setWhich(name)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  };


  console.log(currentUser)

  const displayFreelanceAddOns = (
      <>
        <Grid id='photo-grid' item xs={6}>
          <Item className='title-comp'>Photo Album</Item>
          <Item id='service-photos'>
          <img className='service-pics' src={currentUser.services_photos} alt='color'/>
          </Item>
        </Grid>
        <Grid id='services-prices' item xs={6}>
          <Item className='title-comp'>Services & Prices</Item>
          <Item className='services-cont'>
            <ServiceTable myServices={myServices}/>
          </Item>
          <Item><Button>Book an appointment</Button></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>About</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Map</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Contact Info</Item>
        </Grid>
       </>
  )
  
    return (
      <>
      <Box className='profilepage'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img className='cover-photo' name='cover'onClick={handleOpen} src={currentUser.cover_photo} alt='cover'/>
        </Grid>
        <Grid item xs={4}>
        <div className='profile'>
        <img className='profile-picture' name='profile' onClick={handleOpen} src={currentUser.profile_picture} alt='profile'/>
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
        {currentUser&&currentUser.account_type==='user'?null:displayFreelanceAddOns}
        <Grid item xs={6}>
          <Item>Reviews</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Chat</Item>
        </Grid>
      </Grid>
    </Box>
    
    {/*MODALS*/}
    <div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img className='modal' src={which==='profile'?currentUser.profile_picture:currentUser.cover_photo} alt='profile'/>
        </Box>
      </Modal>
    </div>
    </>
    );
}

export default FreelancerViewOnly;