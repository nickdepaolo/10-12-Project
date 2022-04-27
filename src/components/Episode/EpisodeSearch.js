import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import EpisodeMap from "./EpisodeMap";
import loop from "../../Assets/head.gif"
import potion from "../../Assets/potion.jpg"
import mortynight from "../../Assets/mortynight.jpg"

const EpisodeSearch = (props) => {
    const [userInput, setUserInput] = useState('Pilot')
    const [episodeArray, setEpisodeArray] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [empty, setEmpty] = useState('')
    const [wiki, setWiki] = useState('')
    const location = useLocation()
    const {linkName} = location.state !== undefined? location.state : ''

    useEffect(() => {
        setEpisodeArray(props.epiPass)
    }, [props.epiTrigger])

    useEffect(() => {
        document.getElementById("epiMain").scrollIntoView({behavior: 'smooth'});
    },[episodeArray])

    useEffect(() => {
        linkName !== undefined? submitLinkEpisode(linkName) : setEmpty('')
      }, [linkName])

    const submitEpisode = () => {
        fetch(`https://rickandmortyapi.com/api/episode/?&name=` + userInput)
        .then(res => res.json())
        .then(json => {json.results? setEpisodeArray(json.results) : setEmpty('')})
    }

    const submitLinkEpisode = (e) => {
        fetch(`https://rickandmortyapi.com/api/episode/?name=` + e)
        .then(res => res.json())
        .then(json => {json.results? setEpisodeArray(json.results) : setEmpty('')})
        console.log(e)
    }

    function setInput() {
        userInput > '' ? setSearchInput('&name='+userInput) : setSearchInput('');
        submitEpisode();
    }

    function updateStates() {
        userInput > '' ? setUserInput(document.getElementById('episodeInput').value) : setEmpty([]);
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
                    <div className="homeCard">
                        <img className="homePic" src={potion}/>
                        <h6>Rick Potion #9</h6>
                    </div>
                </div>
                 <img  src={loop}/>
                <div className="flexCol">
                    <div className="homeCard">
                        <img className="homePic" src={mortynight}/>
                        <h6>Mortynight Run</h6>
                    </div>
                </div>
            </div>}
          

            <EpisodeMap charPass={props.charPass} episodeArray={episodeArray} wiki={wiki} selectedEpi={setEpisodeArray}/>

        </div>
    )
}

export default EpisodeSearch;