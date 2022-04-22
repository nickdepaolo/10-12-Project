import React, { useEffect, useState } from "react";
import EpisodeCharacters from "./EpisodeCharacters";
import EpisodeWiki from "./EpisodeWiki";

const EpisodeSpotlight = (props) => {
    const [wiki, setWiki] = useState('')
    const [episodeName, setEpisodeName] = useState('')
    
    function setName(e) {
        e == 'Pilot' ? setEpisodeName('Rick%20Morty%20Pilot') : setEpisodeName(e.replace(/ /g, '%20'))
        console.log(e)
    }
    
    async function fetchWiki() {
        try {const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=15&exlimit=max&gsrsearch=${episodeName}`;
            const res = await fetch(url)
            const data = await res.json();
            const query = data.query.pages
            const parsed = Object.values(query)[0].extract
            {Object.values(query)[0].pageid !== 43794574 ? Object.values(query)[0].pageid !== 65819511 ? setWiki(parsed) : setWiki('') : setWiki('')}
            console.log(wiki)
        } catch(error) {
            console.log('Catch error')
        }
    } 

    return(
        <div>
              {props.sliceEpisode.map((episode) => (
                <div key={episode.name}>
                    <br/>
                    <h1>{episode.name}</h1>
                    <h2>{episode.air_date}</h2>
                    <h3>{episode.episode}</h3>
                    <EpisodeWiki episodeName={episode.name}/>
                    <EpisodeCharacters charPass={props.charPass} characters={props.sliceEpisode[0].characters}/>
                    <h1>__________________</h1>
                </div>
            ))}
        </div>
    )
}

export default EpisodeSpotlight