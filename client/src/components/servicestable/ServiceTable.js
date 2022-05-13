import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";

function ServiceTable ({myServices,setMyServices,currentUser}) {

   const deleteData = (sid) => {
      fetch(`services/${sid}`, {
          method: "DELETE"
      })
      .then(setMyServices(myServices.filter(ser=>sid!==ser.id)))
      .catch( error => console.log(error.message));
    }

    const handleClick =(e) =>{
      const value = parseInt(e.target.value)
      deleteData(value)
    }

    return (
      <TableContainer>
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
                <TableCell align="right">{currentUser.account_type==='freelancer'?<Button onClick={handleClick} value={row.id} style={{color:'red'}}>Remove</Button>:null}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
    );
}

export default ServiceTable;