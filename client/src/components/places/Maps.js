import {  GoogleMap, Marker } from "@react-google-maps/api"
import './maps.css'
import {useState, useMemo, useCallback, useRef, useEffect} from "react"
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css"
import Geocode from "react-geocode";




const Maps = ({freelancerData, services, setServices}) => {
    
    Geocode.setApiKey('')
    console.log('What the data looks like')
    const [selected, setSelected] = useState(null)
    const [center, setCenter] = useState({lat: 44, lng: -80})
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
        <div>
            <PlacesAutocomplete 
                setSelected={setSelected}
                setCenter={setCenter}
            />
        </div>
        <GoogleMap
        zoom={14}
        center={center}
        mapContainerClassName='map_container'
        onLoad={onLoad}
        >
          {selected && (
          <>
          <Marker position={selected} />
          {services.map(service => <Marker position={service}/>)}
          </> 
          )}
        </GoogleMap>
        </>
    )
    
}

const PlacesAutocomplete = ({setSelected, setCenter}) => {
    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions,
    } = usePlacesAutocomplete()

    const handleSelect = async (address) => {
        setValue(address, false)
        clearSuggestions()

        const results = await getGeocode({address})
        const {lat, lng} = await getLatLng(results[0])
        setSelected({lat, lng})
        setCenter({lat, lng})
    }

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            disabled={!ready} 
            className="combobox-input"
            placeholder="Search address"
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description}/>)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}
export default Maps