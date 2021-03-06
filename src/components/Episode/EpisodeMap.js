import React, { useState } from "react";
import EpisodeSpotlight from "./EpisodeSpotlight";

const EpisodeMap = (props) => {
    const episodeArray = props.episodeArray
    const sliceEpisode = episodeArray.slice(0,1)
    const sliceList = episodeArray.slice(1,22)
    const [spotState, setSpotState] = useState('')
 
    function selectedEpi(e) {
        let sliceArray = []
        sliceArray.push(e)
        setSpotState(sliceArray)
        console.log(e)
        document.getElementById("epiSpotLight").scrollIntoView({behavior: 'smooth'})
    }

    return(
        <div>
            <div id='epiSpotLight'>
                <EpisodeSpotlight charPass={props.charPass} sliceEpisode={spotState === '' ? sliceEpisode : spotState} /> 
            </div>
            {sliceList.map((episode) => (
                <div key={episode.name}>
                    <br/>
                    <h3 className='pointer' onClick={() => selectedEpi(episode)} >{episode.name}</h3>
                    <h4 className='pointer' onClick={() => selectedEpi(episode)}>{episode.air_date}</h4>
                    <h4 className='pointer' onClick={() => selectedEpi(episode)}>{episode.episode}</h4>
                    <h1>__________________</h1>
                </div>
            ))}
        </div>
    )
}

export default EpisodeMap