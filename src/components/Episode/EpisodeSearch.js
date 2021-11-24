import React, { useState } from "react";
import EpisodeMap from "./EpisodeMap";

const EpisodeSearch = (props) => {
    const [userInput, setUserInput] = useState('Pilot')
    const [episodeArray, setEpisodeArray] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [empty, setEmpty] = ('')

    const submitEpisode = () => {
        fetch(`https://rickandmortyapi.com/api/episode`)
        .then(res => res.json())
        .then(json => {setEpisodeArray(json.results)})
    }

    function setInput() {
        userInput > '' ? setSearchInput('&name='+userInput) : setSearchInput('');
        submitEpisode();
        console.log(searchInput)
    }

    function updateStates() {
        userInput > '' ? setUserInput(document.getElementById('episodeInput').value) : setEmpty([]);
    
    }

    return(
        <div onChange={updateStates}>
            <h4>Episode Search</h4>
            <input id='episodeInput' onChange={(e) => setUserInput(e.target.value)} />
            <button onClick={submitEpisode}>Search</button>
            <EpisodeMap charPass={props.charPass} episodeArray={episodeArray}/>

        </div>
    )
}

export default EpisodeSearch;