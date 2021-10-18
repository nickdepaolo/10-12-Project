// import { useEffect } from "react";
import React from 'react';
import './Components.css'


const CharacterMap = (props) => {
    
    const infoContain = props.infoContain;

    const sliceChar = infoContain.slice(0,1)

    const sliceList = infoContain.slice(1,20)
    

    return(
        <div>
            {sliceChar.map((spot) =>(
                <div key={spot.id}>
                    <h1>{spot.name}</h1>
                    <img width='300em' src={spot.image}/>
                    {console.log(spot.name)}
                    <p>Gender : {spot.gender}</p>
                    <p>Species : {spot.species}</p>
                    <p>Origin : {spot.origin.name}</p>
                    <p>Last Location : {spot.location.name}</p>
                    <p>{spot.type}</p>
                    <p>{spot.status}</p>
                    <h1>________________</h1>
                   
                </div>
            ))}
           
        
        
            {sliceList.map((card) => (
                <div key={card.id}>
                    <img width='150em' src={card.image}/>
                    <h3>{card.name}</h3>
                    <p>{card.location.name}</p>
                    <p>{card.status}</p>
                    <h1>________________</h1>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default CharacterMap;