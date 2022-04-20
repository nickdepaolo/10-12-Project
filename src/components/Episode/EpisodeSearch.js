import React, { useEffect, useState } from "react";
import EpisodeMap from "./EpisodeMap";
import loop from "../../Assets/head.gif"

const EpisodeSearch = (props) => {
    const [userInput, setUserInput] = useState('Pilot')
    const [episodeArray, setEpisodeArray] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [empty, setEmpty] = useState('')
    const [wiki, setWiki] = useState('')

    useEffect(() => {
        setEpisodeArray(props.epiPass)
    }, [props.epiTrigger])

    useEffect(() => {
        document.getElementById("epiMain").scrollIntoView({behavior: 'smooth'});
    },[episodeArray])

    const submitEpisode = () => {
        fetch(`https://rickandmortyapi.com/api/episode`)
        .then(res => res.json())
        .then(json => {json.results? setEpisodeArray(json.results) : setEmpty('')})
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
            <input id='episodeInput' onChange={(e) => setUserInput(e.target.value)} />
            <button onClick={submitEpisode}>Search</button>
            <br/>
            {episodeArray > '' ? '' : <h3 className="fade-in">Enter an episode or press the search button to pull up a list</h3>}
            {episodeArray > '' ? '' : <img className="fade-in" src={loop}/>}
            <EpisodeMap charPass={props.charPass} episodeArray={episodeArray} wiki={wiki} selectedEpi={setEpisodeArray}/>

        </div>
    )
}

export default EpisodeSearch;