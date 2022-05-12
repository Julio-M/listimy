import React, { useState,useEffect } from "react";
import './freelancerviewonly.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import ServiceTable from "../servicestable/ServiceTable";
import BookingForm from "../bookingtable/BookingForm";
import BookingTable from "../bookingtable/BookingTable";

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

function FreelancerViewOnly ({viewFreelancer,currentUser}) {

  const [myServices, setMyServices] = useState(viewFreelancer.services)

  const [myBookings, setMyBookings] = useState([])


 useEffect( () => {
    fetch(`bookings/${viewFreelancer.id}`)
    .then( res => res.json())
    .then( data => setMyBookings(data))
    .catch( error => console.log(error.message));
 },[])



  const [which, setWhich] = useState('profile')

  const handleOpenService = () => {
    setOpenService(true)
  }

  const [openService,setOpenService] = useState(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    const name = e.target.name
    setWhich(name)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setOpenService(false)
  };


  console.log(viewFreelancer)

  const displayFreelanceAddOns = (
      <>
        <Grid id='photo-grid' item xs={6}>
          <Item className='title-comp'>Photo Album</Item>
          <Item id='service-photos'>
          <img className='service-pics' src={viewFreelancer.services_photos} alt='color'/>
          </Item>
        </Grid>
        <Grid id='services-prices' item xs={6}>
          <Item className='title-comp'>Services & Prices</Item>
          <Item className='services-cont'>
            <ServiceTable myServices={myServices} currentUser={currentUser}/>
          </Item>
          <Item><Button onClick={handleOpenService}>Book an appointment</Button></Item>
        </Grid>
        <Grid item xs={12}>
          <Item>Map</Item>
        </Grid>
       </>
  )
  
    return (
      <>
      <Box className='profilepage'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img className='cover-photo' name='cover'onClick={handleOpen} src={viewFreelancer.cover_photo} alt='cover'/>
        </Grid>
        <Grid item xs={4}>
        <div className='profile'>
        <img className='profile-picture' name='profile' onClick={handleOpen} src={viewFreelancer.profile_picture} alt='profile'/>
          <div className='presonalinfo'>
            <h3 className='username'>{viewFreelancer.username}</h3>
            <p className='Location'>{viewFreelancer.email}</p>
            <p className='account-type'>Type: {viewFreelancer.services?"Freelancer":"Client"}</p>
          </div>
        </div>
        </Grid>
        <Grid zeroMinWidth item xs={12}>
          <Item className='title-comp-free'>Bookings</Item>
          <Item className='services-cont-book'>
            <BookingTable myBookings={myBookings} currentUser={currentUser} setMyBookings={setMyBookings}/>
          </Item>
        </Grid>
        {viewFreelancer&&viewFreelancer.account_type==='user'?null:displayFreelanceAddOns}
        <Grid zeroMinWidth item xs={6}>
          <Item>Reviews</Item>
        </Grid>
        <Grid zeroMinWidth item xs={6}>
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
          <img className='modal' src={which==='profile'?viewFreelancer.profile_picture:viewFreelancer.cover_photo} alt='profile'/>
        </Box>
      </Modal>
    </div>

    <div>
    <Modal
        open={openService}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BookingForm viewFreelancer={viewFreelancer} currentUser={currentUser} setMyBookings={setMyBookings} myBookings={myBookings} setOpenService={setOpenService}/>
        </Box>
      </Modal>
    </div>

    </>
    );
}

export default FreelancerViewOnly;