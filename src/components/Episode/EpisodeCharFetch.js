import React, { useEffect, useState } from "react";
import EpisodeCharMap from "./EpisodeCharMap";

const EpisodeCharFetch = (props) => {
    const [fetchContain, setFetchContain] = useState([]) 

    useEffect(() => {
        fetchChar()
    }, [props]) //eslint-disable-line react-hooks/exhaustive-deps

    function fetchChar() {
        fetch(props.character)
        .then(res => res.json())
        .then(json => setFetchContain(json))
    }

    return(

        <div>
            <EpisodeCharMap charPass={props.charPass} character={fetchContain}/>
        </div>
    )
}

export default EpisodeCharFetch