import React, { useEffect, useState } from "react";
import EpisodeSpotlight from "./EpisodeSpotlight";

const EpisodeMap = (props) => {
    const episodeArray = props.episodeArray
    const sliceEpisode = episodeArray.slice(0,1)
    const sliceList = episodeArray.slice(1,22)
    const [spotState, setSpotState] = useState([])
    const [episodeName, setEpisodeName] = useState('')
    const [wiki, setWiki] = useState('')


    async function fetchWiki() {
        try {const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=15&exlimit=max&gsrsearch=${episodeName}`;
            const res = await fetch(url)
            const data = await res.json();
            const query = data.query.pages
            const parsed = Object.values(query)[0].extract
            setWiki(parsed)
        } catch(error) {
            setWiki('Catch error')
        }
    } 

    useEffect(() => {
        {episodeName > '' ? fetchWiki() : console.log('nope')}
        console.log(episodeName)
    }, [episodeName])

    return(
        <div>
            <EpisodeSpotlight charPass={props.charPass} sliceEpisode={sliceEpisode} episodeName={setEpisodeName} wiki={wiki}/>
            {sliceList.map((episode) => (
                <div key={episode.name}>
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