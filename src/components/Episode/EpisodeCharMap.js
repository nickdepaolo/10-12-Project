import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const EpisodeCharMap = (props) => {



    function setCharPass() {
        props.charPass(props.character);
        
    }


    return(
        <Link onClick={setCharPass}  to='/CharacterSearch' >
        <div>
            <img width='80' src={props.character.image}/>
          <p>{props.character.name}</p>
        </div>
        </Link>
    )
}

export default EpisodeCharMap