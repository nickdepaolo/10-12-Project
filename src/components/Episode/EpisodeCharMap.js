import React from "react";
import { Link } from "react-router-dom";

const EpisodeCharMap = (props) => {
    function setCharPass() {
        props.charPass(props.character);
        
    }

    return(
        <div>
            <Link onClick={setCharPass}  to='/CharacterSearch' >
                <img width='80' src={props.character.image} alt='Character'/>
            </Link>
            <Link onClick={setCharPass}  to='/CharacterSearch' ><h5>{props.character.name}</h5></Link>
        </div>
    )
}

export default EpisodeCharMap