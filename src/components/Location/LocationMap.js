import React from 'react';
import LocationCharacter from './LocationCharacter';

const LocationMap = (props) => {
    const infoContain = props.infoContain;

    return(
        <div>
            {infoContain.map((card) => (
                <div key={card.id} id={card.id}>
                    
                    <h3>{card.name}</h3>
                    <h4>{card.type}</h4>
                    <h4>{card.dimension}</h4>
                    {card.residents.map((character) => (
                        <LocationCharacter character={character}/>
                        
                    ))}
                   
                    <h1>________________</h1>
                    <br/>
                </div>
                ))}
        </div>
    )
}

export default LocationMap;