import Browse from "./Browse"
import Maps from "./Maps"
import Services from "./Services";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import './places.css'
import {useState, useEffect} from "react"
import { useLoadScript } from "@react-google-maps/api"


const Places = ({searchParams, freelancerData, services, setServices, setViewFreelancer,gapi}) => {

    const [center, setCenter] = useState({lat: 40.70705345683868, lng: -74.01128952515276})
   
    const [selected, setSelected] = useState(null)
    const [searchName, setSearchName] = useState("")
    const query = searchParams.get('category_name')
    const query2 = searchParams.get('service_name')
    
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: gapi,
        libraries: ["places"]
    })

    

    const filtered = freelancerData.filter(freelancer => {
        if (query) {
            return freelancer.categories.find(category => category.category_name === query)
        } else if(query2) {
            return freelancer.services.find(service => service.service_name===query2)
        }else if (searchName){
            return freelancer.username.toLowerCase().includes(searchName.toLowerCase())
        } else {
            return freelancer
        }
      })

    return (
        <Box sx={{px:5}}>

            <Browse setSearchName={setSearchName} setSelected={setSelected} selected={selected} setCenter={setCenter}/>
            <div className="map">
            <Grid container spacing={2}>
                <Grid xs={12} md={4}>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {freelancerData.length!==0?filtered.map(freelancer => {
                        return (
                            <Services setSelected={setSelected} setCenter={setCenter} setViewFreelancer={setViewFreelancer} freelancer={freelancer}/>
                        )
                    }):<h1>Loading.....</h1>}
                </List>
                </Grid>
                <Grid xs={12} md={8}>
                {!isLoaded ? <div>Loading...</div> : <Maps selected={selected} center={center} setCenter={setCenter} freelancerData={freelancerData} services={services} setServices={setServices} gapi={gapi}/>}
                </Grid>
            </Grid>
            </div>
        </Box>
        
      
    )
}
export default Places