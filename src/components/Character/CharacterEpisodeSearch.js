import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharacterEpisodeSort from "./CharacterEpisodeSort";

const CharacterEpisodeSearch = (props) => {
    const [sliceControl, setSliceControl] = useState(5)
    const [moreTrue, setMoreTrue] = useState(false)

    useEffect(() => {
        console.log(props.episodes)
    },[props])

    function setSliceTrue() {
        setSliceControl(45);
        setMoreTrue(true)
    }

    function setSliceFalse() {
        setSliceControl(5);
        setMoreTrue(false);
        document.getElementById("spotLight").scrollIntoView({behavior: 'smooth'});

    }

    return(
        <div id='characterEpisode'>
            {props.episodes.slice(0,sliceControl).map((episode) => (
                <div key={episode}>
                    <Link to='/EpisodeSearch'>
                        <CharacterEpisodeSort sliceControl={setSliceControl} episode={episode}/>
                    </Link>
                </div>
            ))}
            {moreTrue && props.episodes.length > 5 ? <button onClick={setSliceFalse}>Less</button> : ''}
            {!moreTrue && props.episodes.length > 5 ? <button onClick={setSliceTrue}>More</button> : ''}
        </div>
    )
}

export default CharacterEpisodeSearch