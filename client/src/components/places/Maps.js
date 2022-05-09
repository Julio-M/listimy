import {  GoogleMap, Marker } from "@react-google-maps/api"
import './maps.css'



const Maps = () => {
    
    return (
        <GoogleMap
        zoom={14}
        center={{lat: 44, lng: -80}}
        mapContainerClassName='map_container'
        >
          
        </GoogleMap>
    )
    
    
}
export default Maps