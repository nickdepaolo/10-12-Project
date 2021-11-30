import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CharacterEpisodeMap = (props) => {


    useEffect(() => {
        console.log(props)
    },[props])

   function pushEpisode() {

       props.epiPass(props.episode)
       console.log(props)
   }

   

    return(
        <div>
            <br/>
            
            <h5 onClick={pushEpisode}><Link to='/EpisodeSearch'>{props.episode.name}</Link></h5>
            
            <h6 onClick={pushEpisode}><Link to='/EpisodeSearch'>{props.episode.air_date}</Link></h6>
        </div>
    )
}

export default CharacterEpisodeMap;