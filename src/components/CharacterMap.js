import { useEffect } from "react";
import React from 'react';

const CharacterMap = (props) => {
    
    const infoContain = props.infoContain;

    

    const onRun = () => {
        console.log(infoContain)
    }

    return(
        <div>
            <button onClick={onRun} >RUN</button>
            {infoContain.map((card) => (
                <div key={card.id}>
                    <img src={card.image}/>
                    <h4>{card.name}</h4>
                    <h6>{card.status}</h6>
                    <h6>{card.location.name}</h6>
                    <br/>
                    
                </div>
            ))}
        </div>
    )
}

export default CharacterMap;