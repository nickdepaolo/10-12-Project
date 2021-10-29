import React from "react";
import EpisodeSpotlight from "./EpisodeSpotlight";

const EpisodeMap = (props) => {
    const episodeArray = props.episodeArray
    const sliceEpisode = episodeArray.slice(0,1)
    const sliceList = episodeArray.slice(1,22)

    return(
        <div>
            <EpisodeSpotlight charPass={props.charPass} sliceEpisode={sliceEpisode}/>
            {sliceList.map((episode) => (
                <div>
                    <br/>
                    <h3>{episode.name}</h3>
                    <h4>{episode.air_date}</h4>
                    <h4>{episode.episode}</h4>
                    <h1>__________________</h1>
                </div>
            ))}
        </div>
    )
}

export default EpisodeMap