import React, { useEffect, useState } from "react";
import EpisodeWikiReturn from "./EpisodeWikiReturn";

const EpisodeWiki = (props) => {
    const [episodeName, setEpisodeName] = useState('')

    useEffect(() =>{
        setName(props.episodeName)
    }, [props.episodeName])

    function setName(e) {
        e == 'Pilot' ? setEpisodeName('Rick%20Morty%20Pilot') : setEpisodeName(e.replace(/ /g, '%20'))
    }

    return(
       <div>
        <EpisodeWikiReturn episodeName={episodeName}/>
       </div>
    )
}

export default EpisodeWiki