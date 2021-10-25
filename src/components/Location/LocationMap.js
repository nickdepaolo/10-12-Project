import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import LocationCharacter from './LocationCharacter';

const LocationMap = (props) => {
    const [sliceControl, setSliceControl] = useState(5)
    const [sliceButton, setSliceButton] = useState(false)
    const infoContain = props.infoContain;

    useEffect(() => {
        swapButton()
    }, [sliceControl])

    function moreCharacters() {
        setSliceControl(20)
    }

    function swapButton() {
        sliceControl > 5 ? setSliceButton(true) : setSliceButton(false)
    }

    function swapLess() {
        setSliceControl(5)
    }

    return(
        <div>
            {infoContain.map((card) => (
                <div key={card.id} id={card.id}>
                    
                    <h3>{card.name}</h3>
                    <h4>{card.type}</h4>
                    <h4>{card.dimension}</h4>
  
                    {card.residents.slice(0,sliceControl).map((character) => (
                        <LocationCharacter character={character}/>
                        ))}
     
                        {card.residents.length > 5 && !sliceButton?  <button onClick={moreCharacters}>More...</button> : ''}
                        {card.residents.length > 5 && sliceButton? <button onClick={swapLess}>Less</button> : ''}
                    <h1>________________</h1>
                    <br/>
                </div>
                ))}
        </div>
    )
}

export default LocationMap;