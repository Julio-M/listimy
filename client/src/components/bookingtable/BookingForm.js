import React, { useState,useEffect } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function BookingForm ({viewFreelancer,setMyBookings,currentUser,myBookings,setOpenService}) {
    const [errors, setErrors] = useState([]);
    const [bookingDate, setBookingDate] = useState(new Date('2022-01-18T21:11:54'));

    const handleDateChange = (newValue) => {
      setBookingDate(newValue);
    };

    const [formData, setFormData] = useState({
      service_id: 0,
      user_id:currentUser.id,
      freelancer_id:viewFreelancer.id,
    })

    ///service-create
    const postBooking = () => {
      fetch(`/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then( res => {
      if (res.ok) {
        res.json().then((ser) => setMyBookings([...myBookings,ser])).then(setOpenService(false))
      } else{
        res.json().then((err)=> setErrors(err.errors))
    }
    })
    }

     // console.log('Hello',`${(bookingDate.getMonth()+1)}/${bookingDate.getDate()}/${bookingDate.getFullYear()} @ ${bookingDate.getHours()}:${bookingDate.getMinutes()}`)
    const handleChange = (e) => {
      const name =e.target.name
      let value = e.target.value

      setFormData({...formData, [name]:value,
        booking_date:`${(bookingDate.getMonth()+1)}/${bookingDate.getDate()}/${bookingDate.getFullYear()} @ ${bookingDate.getHours()}:${bookingDate.getMinutes()}`})
    }

    const displayServices = viewFreelancer.services.map(serv =><MenuItem key={serv.id} value={serv.id}>{serv.service_name}</MenuItem> )

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('clicked')
      postBooking()
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
          name='service_id'
          id="filled-select-currency"
          select
          label="Select"
          value={formData.ser}
          onChange={handleChange}
          helperText="Please select a service"
          variant="filled"
        >
            {displayServices}
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            name='booking_date'
            value={bookingDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
         </LocalizationProvider>
        <Button type='submit'>Request Booking</Button>
        <div>{errors.map((err) => (
                <p>{err}</p>
            ))}</div>
       </Box>
       </FormControl>
    );
}

export default BookingForm;