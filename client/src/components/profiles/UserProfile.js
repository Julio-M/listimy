import React, { useState,useEffect} from "react";
import './userprofile.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import ServiceTable from "../servicestable/ServiceTable";
import ServiceForm from "../servicestable/ServiceForm";
import BookingTable from "../bookingtable/BookingTable"

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

function UserProfile ({currentUser}) {

  const [myBookings, setMyBookings] = useState(currentUser.bookings)

  const [myServices, setMyServices] = useState(currentUser.services)

  const [which, setWhich] = useState('profile')

  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    const name = e.target.name
    setWhich(name)
    setOpen(true)
  }

  const handleOpenService = () => {
    setOpenService(true)
  }

  const handleOpenBooking = () => {
    setOpenBooking(true)
  }

  const [openService,setOpenService] = useState(false)
  const [openBooking,setOpenBooking] = useState(false)

  const handleClose = () => {
    setOpen(false)
    setOpenService(false)
    setOpenBooking(false)
  };



  const displayFreelanceAddOns = (
        <>
        <Grid id='photo-grid' item xs={6}>
          <Item className='title-comp-free'>Photo Album</Item>
          <Item id='service-photos'>
          <img className='service-pics' src={currentUser.services_photos} alt='color'/>
          </Item>
        </Grid>
        <Grid id='services-prices' item xs={6}>
          <Item className='title-comp-free'>Services & Prices <Button onClick={handleOpenService}>+ Add Service</Button></Item>
          <Item className='services-cont-free'>
            <ServiceTable myServices={myServices}/>
          </Item>
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
          <Item className='title-comp-free'>Bookings {currentUser.account_type==='freelancer'?<Button onClick={handleOpenBooking}>| Edit Bookings |</Button>:null}</Item>
          <Item className='services-cont-book'>
            <BookingTable myBookings={myBookings}/>
          </Item>
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
    
    <div>
    <Modal
        open={openService}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ServiceForm currentUser={currentUser} setMyServices={setMyServices} myServices={myServices}/>
        </Box>
      </Modal>
    </div>

    <div>
    <Modal
        open={openBooking}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* {BookingCalendar} */}
        </Box>
      </Modal>
    </div>
    </>
    );
}

export default UserProfile;