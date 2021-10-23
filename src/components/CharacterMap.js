import CharacterSpotlight from './CharacterSpotlight';
import React, {useEffect, useState} from 'react';

import './Components.css'


const CharacterMap = (props) => {
    const [spotID, setSpotID] = useState('')
    const infoContain = props.infoContain;
    const sliceChar = infoContain.slice(0,1)
    const sliceList = infoContain.slice(1,20)
   
    let spotUpdate = infoContain[spotID -1]

    function check() {
        console.log(spotID)
    }

    function passProps() {
        props.triggerInput()
        window.scrollTo({top:0, behavior: 'smooth'})
    }
    
    return(
        <div>
            <button onClick={check}>Check</button>

            <CharacterSpotlight spotContain={sliceChar}/>
        
            {sliceList.map((card) => (
                <div key={card.id} id={card.id} value={card.name} onMouseOver={(e) => props.inputSelect(card.name)} onClick={passProps}>
                    <img width='150em' alt='' src={card.image} value={card.name}/>
                    <h3>{card.name}</h3>
                    <p>{card.location.name}</p>
                    <p>{card.gender}</p>
                    <p>{card.status}</p>
                    <h1>________________</h1>
                    <br/>
                </div>
            ))}

        </div>
    )
}

export default CharacterMap;