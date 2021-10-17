import { useEffect } from "react";
import React from 'react';

const CharacterMap = (props) => {
    
    const infoContain = props.infoContain;

    const sliceChar = infoContain.slice(0,1)

    const sliceList = infoContain.slice(1,10)
    

    return(
        <div>
            {sliceChar.map((spot) =>(
                <div key={spot.id}>
                    <h1>{spot.name}</h1>
                    <img width='300em' src={spot.image}/>
                    {console.log(spot.name)}
                    <p>{spot.gender}</p>
                    <p>{spot.species}</p>
                    <p>{spot.status}</p>
                    <p>{spot.location.name}</p>
                    <h1>________________</h1>
                    <br/>
                    <br/>
                </div>
            ))}
        <br/>
        <br/>
            {sliceList.map((card) => (
                <div key={card.id}>
                    <img width='150em' src={card.image}/>
                    <h3>{card.name}</h3>
                    <p>{card.status}</p>
                    <p>{card.location.name}</p>
                    <h1>________________</h1>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default CharacterMap;