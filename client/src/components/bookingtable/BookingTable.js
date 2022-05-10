import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function BookingTable ({myBookings}) {

  console.log('bookings',myBookings)

  const displayBookings = myBookings.map((row) => (
    <TableRow
      key={row.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.user.username}
      </TableCell>
      <TableCell align="right">{row.freelancer.username}</TableCell>
      <TableCell align="right">{row.booking_date}</TableCell>
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