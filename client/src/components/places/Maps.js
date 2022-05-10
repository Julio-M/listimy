import {  GoogleMap, Marker } from "@react-google-maps/api"
import './maps.css'
import {useState, useMemo, useCallback, useRef, useEffect} from "react"
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css"
import Geocode from "react-geocode";




const Maps = ({selected, freelancerData, services, setServices, center, setCenter}) => {
    
    Geocode.setApiKey('AIzaSyDoIZLoWdlpEK-wreROwlqh01Yg3bfPkpM')
    
    const mapRef = useRef()

    const onLoad = useCallback(map => mapRef.current = map, [])
    
    useEffect(()=> {
        let listServices = []
        freelancerData.map(freelancer => {
            Geocode.fromAddress(freelancer.location).then(
                res => {
                    const {lat, lng} = res.results[0].geometry.location
                    console.log({lat, lng})
                    listServices.push({lat, lng})
                    console.log(listServices)
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
          {services.map(service => <Marker position={service}/>)}
          <Marker position={selected} />
          </> 
          )}
          <Marker position={center} />
        </GoogleMap>
        </>
    )
    
}


export default Maps