import Browse from "./Browse"
import Maps from "./Maps"
import Services from "./Services";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import './places.css'
import { useLoadScript } from "@react-google-maps/api"


const Places = ({freelancerData, services, setServices}) => {

    

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries: ["places"]
    })
    
    
    return (
        <div>
            <Browse/>
            <div className="map">
            <Grid container spacing={2}>
                <Grid xs={12} md={4}>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {freelancerData.map(freelancer => {
                        return (
                            <Services freelancer={freelancer}/>
                        )
                    })}
                </List>
                </Grid>
                <Grid xs={12} md={8}>
                {!isLoaded ? <div>Loading...</div> : <Maps freelancerData={freelancerData} services={services} setServices={setServices}/>}
                </Grid>
            </Grid>
            </div>
        </div>
      
    )
}
export default Places