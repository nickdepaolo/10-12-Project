import React, { useEffect } from "react";

const EpisodeCharMap = (props) => {

    useEffect(() => {
        console.log(props)
    },[props])

    return(
        <div>
            <img width='80' src={props.character.image}/>
          <p>{props.character.name}</p>
        </div>
    )
}

export default EpisodeCharMap