import {  GoogleMap, InfoWindow, Marker } from "@react-google-maps/api"
import './maps.css'
import {useState, useMemo, useCallback, useRef, useEffect} from "react"
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css"
import Geocode from "react-geocode";




const Maps = ({setFreelancerData, centerMarker, filtered, selected, freelancerData, services, setServices, center, setCenter}) => {
    
    Geocode.setApiKey('AIzaSyDoIZLoWdlpEK-wreROwlqh01Yg3bfPkpM')
    
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
  
    // const handleServiceFilter = (service) => {
    //     const findThis = freelancerData.filter(freelancer => {
    //         let query = Geocode.fromLatLng(service.lat, service.lng).then(
    //             response => {
    //                 const address = response.results[0].formatted_address
    //                 return address
    //             }
    //         )
    //         return freelancer.location.toLowerCase() === query
    //     })
    //     setFreelancerData(findThis)
    // }

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
               
                <Marker position={service} >
                 
                </Marker>
               
            )
          })}
          <Marker position={selected} />
           
          </> 
          )}
          <Marker position={center} onClick={()=>setActiveMarker({center})}>
            {activeMarker 
                ? 
                <InfoWindow position={center} visible={true} onCloseClick={()=>setActiveMarker(null)}>
                     <div>{centerMarker.username}</div>
                </InfoWindow>
                :
                null
            }
          </Marker>
        </GoogleMap>
        </>
    )
    
}


export default Maps