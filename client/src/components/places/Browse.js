import {useState } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Button from '@mui/material/Button';
import PlacesAutoComplete from "./PlacesAutoComplete";


const Browse = ({selected, setSelected, setCenter}) => {

    const [value, setValue] = useState(new Date('2022-01-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    
    return (
    // <>
    //   <Grid
    //   container
    //   spacing={0}
    //   direction="row"
    //   alignItems="center"
    //   justifyContent="left"
    //   style={{ minHeight: '15vh' }}
    // >
    //     <Grid item xs={4} m={4}>
    //         <TextField style={{width:'75%'}}id="service" label="Service" />  
    //     </Grid>
    //     <Grid item xs={6} m={8}>
         
    //   <PlacesAutoComplete setSelected={setSelected} selected={selected} setCenter={setCenter}/>
    //     </Grid>
    //   </Grid>
    //   </>
      <Box sx={{py:2, display: 'grid', gridAutoColumns: '1fr', gap: 1}}>

        <Grid item sx={{gridRow: '1', gridColumn: "span 1"}}>
        <TextField style={{width:'100%'}}id="service" label="Service" />  
        </Grid>
        <Grid item sx={{gridRow: '1', gridColumn: "4 / 5"}}>

        <PlacesAutoComplete setSelected={setSelected} selected={selected} setCenter={setCenter}/>
        </Grid>
      </Box>
    )
    
}
export default Browse