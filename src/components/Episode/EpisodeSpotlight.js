import React, { useEffect, useState } from "react";
import EpisodeCharacters from "./EpisodeCharacters";

const EpisodeSpotlight = (props) => {
    
    function setName(e) {
        props.episodeName(e.replace(/ /g, '%20'))
    }

    return(
        <div>
              {props.sliceEpisode.map((episode) => (
                <div key={episode.name}>
                    <br/>
                    <h1 onChange={setName(episode.name)}>{episode.name}</h1>
                    <h2>{episode.air_date}</h2>
                    <h3>{episode.episode}</h3>
                    <h4>{props.wiki}</h4>
                    <EpisodeCharacters charPass={props.charPass} characters={props.sliceEpisode[0].characters}/>
                    <h1>__________________</h1>
                </div>
            ))}
        </div>
    )
}

export default EpisodeSpotlight