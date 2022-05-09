import {useState } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Button from '@mui/material/Button';

const Browse = () => {

    const [value, setValue] = useState(new Date('2022-01-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    
    return (
    <>
      <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '15vh' }}
    >
        <Grid item xs={4}>
            <TextField style={{width:'100%'}}id="service" label="Service" />  
        </Grid>
        <Grid item xs={1}>
          <TextField label="Zip code" id="zip" />
        </Grid>
        <Grid item xs={2}>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
         </LocalizationProvider>
        </Grid>
      </Grid>
      </>
    )
    
}
export default Browse