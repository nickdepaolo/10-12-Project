import React, { useEffect, useState } from "react";
import LocationMap from './LocationMap'

const LocationSearch = (props) => {

    const [infoContain, setInfoContain] = useState([])
    const [inputContain, setInputContain] = useState('')
    const [typeContain, setTypeContain] = useState('')
    const [demContain, setDemContain] = useState('')
    const [empty, setEmpty] = useState('')

    const APIURL = 'https://rickandmortyapi.com/api/location/?&name='

    useEffect(() => {
        props.locTrigger ? setInputContain(props.locPass) : setEmpty('');
    }, [props.locPass])

    useEffect(() => {
        props.locPass > '' ? mainSearch() : setEmpty('')
    }, [inputContain])

    useEffect(() => {
        typeContain > '' ? fetch(`https://rickandmortyapi.com/api/location/?&type=${typeContain}`)
                .then(res => res.json())
                .then( json => {json.results? setInfoContain(json.results) : setEmpty('')})
            : setEmpty('');
            console.log(typeContain)
    }, [typeContain])

    useEffect(() => {
        demContain > '' ? fetch(`https://rickandmortyapi.com/api/location/?&dimension=${demContain}`)
                .then(res => res.json())
                .then(json => setInfoContain(json.results))
            : setEmpty('')
    }, [demContain])

    useEffect(() => {
        document.getElementById("locMain").scrollIntoView({behavior: 'smooth'});
      },[infoContain])

    const mainSearch = () => {
        fetch(APIURL+inputContain)
        .then(res => res.json())
        .then(json => setInfoContain(json.results.slice(0,5)))
    }

    return(
        <div id='locMain'>
            <h4>Location Search</h4>
            <input onChange={(e)=> setInputContain(e.target.value)}/>
            <button onClick={mainSearch} >Search</button>
            <br/>
            <br/>
            <LocationMap demContain={setDemContain} typeContain={setTypeContain} charPass={props.charPass} infoContain={infoContain}/>
        </div>
    )
}

export default LocationSearch