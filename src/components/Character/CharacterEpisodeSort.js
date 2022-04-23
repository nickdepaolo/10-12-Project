import React, { useEffect, useState } from "react";
import CharacterEpisodeMap from "./CharacterEpisodeMap";

const CharacterEpisodeSort = (props) => {
    const [episodeContain, setEpisodeContain] = useState('')
    const episodeURL = props.episode

    useEffect(() => {
        submitEpisode() 
    },[props.episode]) 

    const submitEpisode = () => {
        fetch(episodeURL)
        .then(res => res.json())
        .then(json =>{
            setEpisodeContain(json);
        })
    }

     
    return(
        <div>
            
            <CharacterEpisodeMap epiPass={props.epiPass} sliceControl={props.sliceControl} episode={episodeContain}/>

        </div>
    )
}

export default CharacterEpisodeSort