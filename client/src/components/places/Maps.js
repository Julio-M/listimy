import {  GoogleMap, InfoWindow, Marker } from "@react-google-maps/api"
import './maps.css'
import {useState, useMemo, useCallback, useRef, useEffect} from "react"
import "@reach/combobox/styles.css"
import Geocode from "react-geocode";




const Maps = ({selected, freelancerData, services, setServices, center, setCenter,gapi}) => {
    
    Geocode.setApiKey(gapi)
    
    const mapRef = useRef()
    const [activeMarker, setActiveMarker] = useState(null)

    const onLoad = useCallback(map => mapRef.current = map, [])
    
    useEffect(()=> {
        let listServices = []
        freelancerData.map(freelancer => {
            Geocode.fromAddress(freelancer.location).then(
                res => {
                    const {lat, lng} = res.results[0].geometry.location
                    listServices.push({lat, lng})
                }
            )
        })
        setServices(listServices)
    }, [])
  
    return (
        <>
        <GoogleMap
        zoom={14}
        center={center}
        mapContainerClassName='map_container'
        onLoad={onLoad}
        >
           
          {selected && (
          <>
          {services.map(service => {
            return (
               
                <Marker position={service} onClick={()=>setActiveMarker({service})} >
                   {activeMarker 
                        ? 
                        <InfoWindow position={center} visible={true} onCloseClick={()=>setActiveMarker(null)}>
                            <div>Service: Info</div>
                        </InfoWindow>
                        :
                        null
                    }
                </Marker>
               
            )
          })}
          <Marker position={selected} />
           
          </> 
          )}
          <Marker position={center} />
        </GoogleMap>
        </>
    )
    
}


export default Maps