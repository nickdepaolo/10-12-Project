import React, { useEffect } from "react";
import EpisodeCharacters from "./EpisodeCharacters";

const EpisodeSpotlight = (props) => {
    useEffect(() => {
        console.log(props)
    }, [props])

    return(
        <div>
              {props.sliceEpisode.map((episode) => (
                <div key={episode.name}>
                    <br/>
                    <h1>{episode.name}</h1>
                    <h2>{episode.air_date}</h2>
                    <h3>{episode.episode}</h3>
                    <EpisodeCharacters charPass={props.charPass} characters={props.sliceEpisode[0].characters}/>
                    <h1>__________________</h1>
                </div>
            ))}
        </div>
    )
}

export default EpisodeSpotlight