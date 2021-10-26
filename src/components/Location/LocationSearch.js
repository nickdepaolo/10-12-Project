import React, { useState } from "react";
import LocationMap from './LocationMap'

const LocationSearch = (props) => {

    const [infoContain, setInfoContain] = useState([])
    const [inputContain, setInputContain] = useState('')

    const APIURL = 'https://rickandmortyapi.com/api/location/?&name='

    const mainSearch = () => {
        fetch(APIURL+inputContain)
        .then(res => res.json())
        .then(json => setInfoContain(json.results.slice(0,5)))
    }

    function logTrigger() {
        console.log(infoContain)
    }
 
    return(
        <div>
            <h4>Location Search</h4>
            <input onChange={(e)=> setInputContain(e.target.value)}/>
            <button onClick={mainSearch} onMouseUp={logTrigger}>Search</button>
            <br/>
            <br/>
            <LocationMap charPass={props.charPass} infoContain={infoContain}/>
        </div>
    )
}

export default LocationSearch