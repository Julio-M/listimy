import {  GoogleMap, InfoWindow, Marker } from "@react-google-maps/api"
import './maps.css'
import {useState, useMemo, useCallback, useRef, useEffect} from "react"
import "@reach/combobox/styles.css"
import Geocode from "react-geocode";
import Rating from '@mui/material/Rating';



const Maps = ({listService, setFreelancerData, centerMarker, filtered, selected, freelancerData, services, setServices, center, setCenter}) => {
    
    Geocode.setApiKey('')
    
    const mapRef = useRef()
    const [activeMarker, setActiveMarker] = useState(null)
    const [markerState, setMarkerState] = useState([])
    const [selectedMarker, setSelectedMarker] = useState(null)
    
    console.log(listService)

    const onLoad = useCallback(map => mapRef.current = map, [])

    
    
    useEffect(()=> {
        
        listService.map(service => {
            Geocode.fromAddress(service.location).then(
                res => {
                    const {lat, lng} = res.results[0].geometry.location
                    const reviews = service.reviews.map(review => review.stars)
                    // const averageReview = reviews !== [] ? reviews.reduce((a, b) => (a + b)/reviews.length, 0) : []
                    const averageReview = reviews.reduce((a, b) => (a + b)/reviews.length, 0)

                    setMarkerState((markerState) => [
                        ...markerState,
                        {
                        username : service.username,
                        coordinates : {lat, lng},
                        reviews : averageReview
                        }
                    ])
                }
            )
        })
    }, [listService])
   
    console.log(markerState)
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
          <Marker position={selected} />
           
          {markerState.map((marker)=> {
            const {coordinates, username, reviews} = marker
            return (
                
                <Marker position={coordinates} key={username} label={username}onClick={(e)=>console.log(e.key)}>
                {selectedMarker 
                    ? 
                    <InfoWindow position={coordinates} visible={true} onCloseClick={()=>setSelectedMarker(null)}>
                        <div>
                            <div>{username}</div>
                            
                            <Rating name="half-rating" defaultValue={reviews} precision={0.5} size="small"/>
                        </div>
                    </InfoWindow>
                    :
                    null
                }
                </Marker>
            )
          })}
          </> 
          )}
          
          <Marker position={center} onClick={(e)=>console.log(e)}>
          {activeMarker 
                    ? 
                    <InfoWindow position={center} visible={true} onCloseClick={()=>setActiveMarker(null)}>
                        <div>
                            <div>{centerMarker.username}</div>
                            <div>{centerMarker.email}</div>
                        </div>
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