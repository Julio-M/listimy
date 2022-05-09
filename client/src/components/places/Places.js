import Browse from "./Browse"
import Maps from "./Maps"
import Services from "./Services";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './places.css'
import { useLoadScript } from "@react-google-maps/api"


const Places = () => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: ""
    })
    
    
    return (
        <div>
            <Browse />
            <div className="map">
            <Grid container spacing={2}>
                <Grid xs={12} md={4}>
                    <Services />
                </Grid>
                <Grid xs={12} md={8}>
                {!isLoaded ? <div>Loading...</div> : <Maps />}
                </Grid>
            </Grid>
            </div>
        </div>
      
    )
}
export default Places