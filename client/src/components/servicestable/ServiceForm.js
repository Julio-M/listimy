import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

function ServiceForm (props) {

  const [formData, setFormData] = useState({
    "service_name": "",
    "service_price": 0,
    "category_id": 0
  })

  const postService = () => {
    
  }

    return (
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
            <TextField id="outlined-basic" label="Service" variant="outlined" /> 
            <TextField id="outlined-basic" label="Price" variant="outlined" type='number' /> 
            <TextField
          id="filled-select-currency"
          select
          label="Select"
          value="category"
          onChange={()=>console.log('changed')}
          helperText="Please select your category"
          variant="filled"
        >
            <MenuItem key='1'value="option">
              option1
            </MenuItem>
        </TextField>
        <Button>Add</Button>
       </Box>
    );
}

export default ServiceForm;