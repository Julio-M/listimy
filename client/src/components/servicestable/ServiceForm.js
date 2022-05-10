import React, { useState,useEffect } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import FormControl from '@mui/material/FormControl';

function ServiceForm ({currentUser,setMyServices,myServices}) {
    const [errors, setErrors] = useState([]);

    const [categories,setCategories] = useState([])

    const getData = () => {
      fetch(`http://127.0.0.1:3000/categories`)
      .then( res => res.json())
      .then( data => setCategories(data))
      .catch( error => console.log(error.message));
    }

    useEffect( () => {
    getData()
    },[])


    const [formData, setFormData] = useState({
      service_name: "",
      service_price: 0,
      category_id: 0,
      freelancer_id:currentUser.id
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

    const displayOptions = categories.map(cat => <MenuItem key={cat.id} value={cat.id}>{cat.category_name}</MenuItem> )

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
            <TextField onChange={handleChange} id="outlined-basic" name='service_name' label="Service" variant="outlined" value={formData.service_name} /> 
            <TextField onChange={handleChange} id="outlined-basic" name='service_price' label="Price" variant="outlined" type='number' value={formData.service_price} /> 
            <TextField
          name='category_id'
          id="filled-select-currency"
          select
          label="Select"
          value={formData.category_id}
          onChange={handleChange}
          helperText="Please select your category"
          variant="filled"
        >
            {displayOptions}
        </TextField>
        <Button type='submit'>Add</Button>
        <div>{errors.map((err) => (
                <p>{err}</p>
            ))}</div>
       </Box>
       </FormControl>
    );
}

export default ServiceForm;