import React, { useState } from "react";
import LocationMap from './LocationMap'

const LocationSearch = () => {

    const [infoContain, setInfoContain] = useState([])

    const APIURL = 'https://rickandmortyapi.com/api/location'

    const mainSearch = () => {
        fetch(APIURL)
        .then(res => res.json())
        .then(json => setInfoContain(json.results.slice(0,5)))
        .then(json => console.log(json))
    }

    function logTrigger() {
        console.log(infoContain)
    }
 
    return(
        <div>
            <h4>Location Search</h4>
            <input/>
            <button onClick={mainSearch} onMouseUp={logTrigger}>Search</button>
            <br/>
            <br/>
            <LocationMap infoContain={infoContain}/>
        </div>
    )
}

export default LocationSearch