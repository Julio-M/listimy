import React, {useState,useEffect } from "react";
import TextField from '@mui/material/TextField';
import './landingpage.css'
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from "@mui/material";
import { useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


function TopLayout ({setSearchParams}) {
    let navigate = useNavigate()
    const [services,setServices] = useState([])
    const [myService,setMyService] = useState(services[0])
    const [inputValue, setInputValue] = useState('');

    const getData = () => {
      fetch ('/services')
    .then (res => {
      if (res.ok) {
      res.json().then((data) => {
        const names = data.map(serv => serv.service_name)
        setServices(names)
      })
    } else {
      console.log(res.json())
    }
  })
  }


  useEffect( () => {
    getData()
  },[])

  const handleClick = (e) => {
    setSearchParams({service_name:myService})
    if (myService){
      navigate({
        pathname: `/places?service_name=${myService}`
      })
    }
  }



    return (
      <>
      <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '50vh' }}
    >
        <Grid item xs={4}>
        <Autocomplete
            value={myService}
            onChange={(event, newValue) => {
              setMyService(newValue);
            }}
            inputValue={inputValue}
            disablePortal
            id="combo-box-demo"
            options={services}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => <TextField {...params} style={{width:'100%'}} id="service" label="Service" /> } 
            />
        </Grid>
        <Grid item xs={0}>
          <Button onClick={handleClick}><SearchIcon className='searchIcon'/></Button>
        </Grid>
      </Grid>
      </>
    );
}

export default TopLayout;