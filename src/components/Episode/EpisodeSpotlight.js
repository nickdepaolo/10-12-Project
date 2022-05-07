import React from "react";
import EpisodeCharacters from "./EpisodeCharacters";
import EpisodeWiki from "./EpisodeWiki";

const EpisodeSpotlight = (props) => {
   
    return(
        <div>
              {props.sliceEpisode.map((episode) => (
                <div  key={episode.name}>
                    <div id="epiCard">
                    <br/>
                    <h1>{episode.name}</h1>
                    <h2>{episode.air_date}</h2>
                    <h3>{episode.episode}</h3>
                   {props.sliceEpisode[0].characters !== undefined && <EpisodeWiki episodeName={episode.name}/>}
                    </div>
                    <br/>
                    <br/>
                   {props.sliceEpisode[0].characters !== undefined && <EpisodeCharacters charPass={props.charPass} characters={props.sliceEpisode[0].characters}/>}
                    <h1>__________________</h1>
                </div>
            ))}
        </div>
    )
}

export default EpisodeSpotlight