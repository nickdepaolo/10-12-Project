import React, { useEffect, useState } from "react";
import EpisodeSpotlight from "./EpisodeSpotlight";

const EpisodeMap = (props) => {
    const episodeArray = props.episodeArray
    const sliceEpisode = episodeArray.slice(0,1)
    const sliceList = episodeArray.slice(1,22)
    const [spotState, setSpotState] = useState('')
    const [episodeName, setEpisodeName] = useState('')
    const [wiki, setWiki] = useState('')
    const [empty, setEmpty] = useState('')


    async function fetchWiki() {
        try {const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=15&exlimit=max&gsrsearch=${episodeName}`;
            const res = await fetch(url)
            const data = await res.json();
            const query = data.query.pages
            const parsed = Object.values(query)[0].extract
            {Object.values(query)[0].pageid !== 43794574 ? Object.values(query)[0].pageid !== 65819511 ? setWiki(parsed) : setWiki('') : setWiki('')}
            console.log(query)
        } catch(error) {
            setWiki('Catch error')
        }
    } 

    function selectedEpi(e) {
        let sliceArray = []
        sliceArray.push(e)
        setSpotState(sliceArray)
        console.log(e)
        document.getElementById("epiSpotLight").scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
        {episodeName > '' ? fetchWiki() : console.log('nope')} 
        console.log(episodeName)
    }, [episodeName])

    return(
        <div>
            <div id='epiSpotLight'>
                <EpisodeSpotlight charPass={props.charPass} sliceEpisode={spotState == '' ? sliceEpisode : spotState} episodeName={setEpisodeName} wiki={wiki}/> 
            </div>
            {sliceList.map((episode) => (
                <div key={episode.name}>
                    <br/>
                    <h3 onClick={() => selectedEpi(episode)} >{episode.name}</h3>
                    <h4 onClick={() => selectedEpi(episode)}>{episode.air_date}</h4>
                    <h4 onClick={() => selectedEpi(episode)}>{episode.episode}</h4>
                    <h1>__________________</h1>
                </div>
            ))}
        </div>
    )
}

export default EpisodeMap