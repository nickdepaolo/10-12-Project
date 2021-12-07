import React, { useEffect } from "react";
import EpisodeCharFetch from "./EpisodeCharFetch";

const EpisodeCharacters = (props) => {
    let characters = props.characters
  
    return(
        <div>
          {characters.map((character) => (
              <div key={character}>
                  <EpisodeCharFetch charPass={props.charPass} character={character}/>
              </div>
          ))}
        </div>
    )
}

export default EpisodeCharacters