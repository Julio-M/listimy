import React, { useState,useEffect } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import FormControl from '@mui/material/FormControl';

function BookingForm ({currentUser,setMyServices,myServices}) {
    const [errors, setErrors] = useState([]);

    console.log('Service',currentUser.services)

    const [formData, setFormData] = useState({
      service_id: 0,
      user_id:currentUser.id,
      freelancer_id:currentUser.id,
      booking_date:'05/17/2022'
    })

    ///service-create
    const postService = () => {
      fetch(`/service-create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then( res => {
      if (res.ok) {
        res.json().then((ser) => setMyServices([...myServices,ser]))
      } else{
        res.json().then((err)=> setErrors(err.errors))
    }
    })
    }

    const handleChange = (e) => {
      const name =e.target.name
      let value = e.target.value

      setFormData({...formData, [name]:value})
    }

    const displayServices = currentUser.services.map(serv =><MenuItem key={serv.id} value={serv.id}>{serv.service_name}</MenuItem> )

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('clicked')
      postService()
    }

    return (
      <FormControl onSubmit={handleSubmit}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
            <TextField
          name='category_id'
          id="filled-select-currency"
          select
          label="Select"
          value={formData.ser}
          onChange={handleChange}
          helperText="Please select your category"
          variant="filled"
        >
            {displayServices}
        </TextField>
            <TextField onChange={handleChange} id="outlined-basic" name='service_price' label="Choose a date" variant="outlined" type='number' value={formData.service_price} /> 
        <Button type='submit'>Request Booking</Button>
        <div>{errors.map((err) => (
                <p>{err}</p>
            ))}</div>
       </Box>
       </FormControl>
    );
}

export default BookingForm;