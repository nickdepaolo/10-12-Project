import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import LocationMap from './LocationMap'
import loop from "../../Assets/universeLoop.gif"
import cable from "../../Assets/cable.jpg"
import squanch from "../../Assets/squanch.jpg"


const LocationSearch = (props) => {

    const [infoContain, setInfoContain] = useState([])
    const [inputContain, setInputContain] = useState('')
    const [typeContain, setTypeContain] = useState('')
    const [demContain, setDemContain] = useState('')
    const location = useLocation()
    const {linkName} = location.state !== undefined? location.state : ''

    const APIURL = 'https://rickandmortyapi.com/api/location/?&name='

    useEffect(() =>{
        setInfoContain('')
        clearSource()
    }, [])

    useEffect(() => {
        props.locTrigger && setInputContain(props.locPass);
    }, [props.locPass]) //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        props.locPass && mainSearch() 
    }, [inputContain]) //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        linkName !== undefined && mainLinkSearch(linkName)
      }, [linkName])

    useEffect(() => {
        typeContain && fetch(`https://rickandmortyapi.com/api/location/?&type=${typeContain}`)
                .then(res => res.json())
                .then( json => {json.results && setInfoContain(json.results)});
    }, [typeContain])

    useEffect(() => {
        demContain && fetch(`https://rickandmortyapi.com/api/location/?&dimension=${demContain}`)
                .then(res => res.json())
                .then(json => setInfoContain(json.results))
    }, [demContain])

    useEffect(() => {
        document.getElementById("locMain").scrollIntoView({behavior: 'smooth'});
      },[infoContain])

    const clearSource = () => {
        setInfoContain('')
    }

    const mainSearch = () => {
        fetch(APIURL + inputContain)
        .then(res => res.json())
        .then(json => {json.results && setInfoContain(json.results.slice(0,5))})
    }

    const mainLinkSearch = (e) => {
        fetch(APIURL + e)
        .then(res => res.json())
        .then(json => {json.results && setInfoContain(json.results.slice(0,5))})
    }

    return(
        <div id='locMain'>
            <h4>Location Search</h4>
            <input className='searchInput' onChange={(e)=> setInputContain(e.target.value)}/>
            <button className='searchButton' onClick={mainSearch} >Search</button>
            <br/>
            <br/>
            <br/>

            {infoContain > '' ? <LocationMap demContain={setDemContain} typeContain={setTypeContain} charPass={props.charPass} infoContain={infoContain}/>
            : <div className="flexWrapper">
                <div className="flexCol">
                    <div className="searchCard" onClick={() => mainLinkSearch('interdimensional cable')}>
                        <img className="homePic" src={cable} alt='Interdimensional Cable'/>
                        <h6>Interdimensional Cable</h6>
                    </div>
                </div>
                <img className="fade-in" src={loop} alt='Loop'/>
                <div className="flexCol">
                    <div className="searchCard" onClick={() => mainLinkSearch('Planet squanch')}>
                        <img className="homePic" src={squanch} alt='Planet Squanch'/>
                        <h6>Planet Squanch</h6>
                    </div>
                </div>
            </div>}
            
           

        </div>
    )
}

export default LocationSearch