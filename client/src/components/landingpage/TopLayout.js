import React, {useState } from "react";
import TextField from '@mui/material/TextField';
import './landingpage.css'
import Grid from '@mui/material/Grid';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function TopLayout (props) {

  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

    return (
      <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '50vh' }}
    >
        <Grid item xs={2}>
            <TextField style={{width:'100%'}}id="service" label="Service" />  
        </Grid>
        <Grid item xs={1}>
          <TextField label="Zip code" id="zip" />
        </Grid>
        <Grid item xs={1}>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
         </LocalizationProvider>
        </Grid>
      </Grid>
    );
}

export default TopLayout;