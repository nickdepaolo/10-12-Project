import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import LocationCharacter from './LocationCharacter';
import LocationCharPic from './LocationCharPic';

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

    function selectDem(e) {
        props.demContain(e)
    }

    function selectType(e) {
        props.typeContain(e)
    }

    return(
        <div  id='infoMap'>
            {infoContain.map((card) => (
                <div key={card.name}>
                    
                    <h3 className='pointer'>{card.name}</h3>
                    <h4 className='pointer' onClick={() => selectType(card.type)}>{card.type}</h4>
                    {card.dimension == 'unknown' ? <h5>Dimension Unknown</h5> : <h5 className='pointer' onClick={() => selectDem(card.dimension)}>{card.dimension}</h5>}
                  
                    {card.residents.slice(0,sliceControl).map((character) => (
                        <div key={character}>
                            <LocationCharacter charPass={props.charPass} character={character}/>
                            {/* <LocationCharPic charPass={props.charPass} infoContain={character}/> */}
                        </div>
                        ))}
     
                        {card.residents.length > 5 && !sliceButton?  <button className='moreButton' onClick={moreCharacters}>More...</button> : ''}
                        {card.residents.length > 5 && sliceButton? <button className='moreButton' onClick={swapLess}>Less</button> : ''}
                    <h1>________________</h1>
                    <br/>
                </div>
                ))}
        </div>
    )
}

export default LocationMap;