import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import './reviews.css'


function ReviewsTable ({reviews,setReviews,currentUser}) {

  const deleteData = (sid) => {
    fetch(`reviews/${sid}`, {
        method: "DELETE"
    })
    .then(setReviews(reviews.filter(rew => sid!==rew.id)))
    .catch( error => console.log(error.message));
  }

  const handleDelete = (e) => {
    const value = parseInt(e.target.value)
    deleteData(value)
  }

  const displayReviews = reviews.map((rew) => (
    <TableRow
      key={rew.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
      hover={true}
      value={rew.id}
    >
      <TableCell sx={{borderBottom: "none"}} component="th" scope="row">
      {<img className='profile-pic-book' src={rew.user.profile_picture} alt='some profile'/> }
        {rew.user.username}
      </TableCell>
      <TableCell sx={{borderBottom: "none"}} align="right">{rew.comment}</TableCell>
      <TableCell sx={{borderBottom: "none"}} align="right">{rew.user.id===currentUser.id?<Button 
      value={rew.id} onClick={handleDelete} style={{color:'red'}}>🗑</Button>:null}</TableCell>
    </TableRow>
  ))

    return (
      <TableContainer className='reviews-block'>
      <Table sx={{ minWidth: "100%"}} aria-label="simple table">
        <TableBody>
            {displayReviews}
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default ReviewsTable;