import Browse from "./Browse"
import Maps from "./Maps"
import Services from "./Services";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import './places.css'
import {useState} from "react"
import { useLoadScript } from "@react-google-maps/api"


const Places = ({freelancerData, services, setServices, setViewFreelancer}) => {

    const [center, setCenter] = useState({lat: 44, lng: -80})
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDoIZLoWdlpEK-wreROwlqh01Yg3bfPkpM",
        libraries: ["places"]
    })

  

    return (
        <div>
            <Browse/>
            <div className="map">
            <Grid container spacing={2}>
                <Grid xs={12} md={4}>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {freelancerData.length!==0?freelancerData.map(freelancer => {
                        return (
                            <Services setCenter={setCenter} setViewFreelancer={setViewFreelancer} freelancer={freelancer}/>
                        )
                    }):<h1>Loading.....</h1>}
                </List>
                </Grid>
                <Grid xs={12} md={8}>
                {!isLoaded ? <div>Loading...</div> : <Maps center={center} setCenter={setCenter} freelancerData={freelancerData} services={services} setServices={setServices}/>}
                </Grid>
            </Grid>
            </div>
        </div>
      
    )
}
export default Places