import React, { useEffect, useState } from "react";

const CharacterEpisodeMap = (props) => {


    useEffect(() => {
        console.log(props)
    },[props])

   

    return(
        <div>
            <br/>
            <h5>{props.episode.name}</h5>
            <h6>{props.episode.air_date}</h6>
        </div>
    )
}

export default CharacterEpisodeMap;