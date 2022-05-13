import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import './booking.css'

function BookingTable ({myBookings,setMyBookings,viewFreelancer}) {

  const deleteData = (sid) => {
    fetch(`bookings/${sid}`, {
        method: "DELETE"
    })
    .then(setMyBookings(myBookings.filter(bk=>sid!==bk.id)))
    .catch( error => console.log(error.message));
  }

  const handleClick =(e) =>{
    const value = parseInt(e.target.value)
    deleteData(value)
  }

  // console.log('Hello',`${(bookingDate.getMonth()+1)}/${bookingDate.getDate()}/${bookingDate.getFullYear()} @ ${bookingDate.getHours()}:${bookingDate.getMinutes()}`)


  // date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()

  const displayBookings = myBookings.map((row) => (
    <TableRow
      key={row.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
      {<img className='profile-pic-book' src={row.user.profile_picture} alt='some profile'/> }
        {row.user.username}
      </TableCell>
      <TableCell align="right">{row.service?row.service.service_name:"TBD"}</TableCell>
      <TableCell align="right">
      {<img className='profile-pic-book' src={row.freelancer.profile_picture} alt='some profile'/> }
      {row.freelancer.username}
      </TableCell>
      <TableCell align="right">{row.booking_date}</TableCell>
      <TableCell align="right">{viewFreelancer?null:<Button onClick={handleClick} value={row.id} style={{color:'red'}}>Remove</Button>}</TableCell>

    </TableRow>
  ))

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%"}} aria-label="simple table">
          <TableBody>
            {myBookings?displayBookings:<p>No bookings</p>}
          </TableBody>
        </Table>
    </TableContainer>
    );
}

export default BookingTable;