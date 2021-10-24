import React, {useState, useEffect} from 'react'


const CharacterSpotlight = (props) => {

    return(
        <div>
                {props.spotContain.map((spot) =>(
                <div key={spot.id}>
                    <h1>{spot.name}</h1>
                    <img width='300em' alt=''src={spot.image}/>
                    <p>Species : {spot.species}</p>
                    <p>Gender : {spot.gender}</p>
                    <p>Origin : {spot.origin.name}</p>
                    <p>Last Location : {spot.location.name}</p>
                    <p>{spot.status}</p>
                    <p>{spot.type}</p>
                    <h1>________________</h1>
                    
                </div>
            ))}
               

        </div>
    )
}

export default CharacterSpotlight