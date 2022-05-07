import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import EpisodeMap from "./EpisodeMap";
import loop from "../../Assets/head.gif"
import potion from "../../Assets/potion.jpg"
import mortynight from "../../Assets/mortynight.jpg"

const EpisodeSearch = (props) => {
    const [userInput, setUserInput] = useState('Pilot')
    const [episodeArray, setEpisodeArray] = useState([])
    const location = useLocation()
    const {linkName} = location.state !== undefined? location.state : ''

    useEffect(() => {
        setEpisodeArray(props.epiPass)
    }, [props.epiTrigger]) //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        document.getElementById("epiMain").scrollIntoView({behavior: 'smooth'});
    }, [episodeArray])

    useEffect(() => {
        linkName !== undefined && submitLinkEpisode(linkName) 
      }, [linkName])

    const submitEpisode = () => {
        fetch(`https://rickandmortyapi.com/api/episode/?&name=` + userInput)
        .then(res => res.json())
        .then(json => {json.results && setEpisodeArray(json.results)})
    }

    const submitLinkEpisode = (e) => {
        fetch(`https://rickandmortyapi.com/api/episode/?name=` + e)
        .then(res => res.json())
        .then(json => {json.results && setEpisodeArray(json.results)})
    }

    function updateStates() {
        userInput && setUserInput(document.getElementById('episodeInput').value);
    }

    return(
        <div id ='epiMain' onChange={updateStates}>
            <h4>Episode Search</h4>
            <input id='episodeInput' className='searchInput' onChange={(e) => setUserInput(e.target.value)} />
            <button className='searchButton' onClick={submitEpisode}>Search</button>
            <br/>
            <br/>
            <br/>

            {episodeArray > '' ? '' :<div className="flexWrapper">
                <div className="flexCol">
                    <div className="searchCard" onClick={() => submitLinkEpisode('potion')}>
                        <img className="homePic" src={potion} alt='Rick Potion #9'/>
                        <h6>Rick Potion #9</h6>
                    </div>
                </div>
                 <img  src={loop} alt='Loop'/>
                <div className="flexCol">
                    <div className="searchCard" onClick={() => submitLinkEpisode('mortynight')}>
                        <img className="homePic" src={mortynight} alt='Mortynight Run'/>
                        <h6>Mortynight Run</h6>
                    </div>
                </div>
            </div>}
          

            <EpisodeMap charPass={props.charPass} episodeArray={episodeArray} selectedEpi={setEpisodeArray}/>

        </div>
    )
}

export default EpisodeSearch;