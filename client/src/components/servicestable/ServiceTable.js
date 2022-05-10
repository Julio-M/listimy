import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ServiceTable ({myServices}) {


    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%"}} aria-label="simple table">
          <TableBody>
            {myServices.map((row) => (
              <TableRow
                key={row.service_name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.service_name}
                </TableCell>
                <TableCell align="right">${row.service_price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
    );
}

export default ServiceTable;