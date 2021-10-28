import CharacterSpotlight from './CharacterSpotlight';
import React, {useEffect, useState} from 'react';

import '../Components.css'


const CharacterMap = (props) => {
    
    const infoContain = props.infoContain;
    const sliceList = infoContain.slice(1,22)
    const sliceChar = infoContain.slice(0,1)
    const [passArray, setPassArray] = useState([])
    const [spotState, setSpotState] = useState([])
    const [isTrue, setIsTrue] = useState(false)

    useEffect(() =>{
        setIsTrue(false)
    }, [props.infoContain])


    function setTrue() {
        setIsTrue(true);
        console.log(isTrue)
    }
    
    function firstSet() {
        setSpotState(sliceChar)
    }
    
    function passProps() {
        props.triggerInput()
    }
    
    function setSliceArray(e) {
        let sliceArray = []
        sliceArray.push(e)
        setPassArray(sliceArray)
    }
    
    function setSliceState() {
        window.scrollTo({top:0, left:0, behavior: 'smooth'})
        setSpotState(passArray)
        setTrue()
    }
    
    return(
        <div>
   
            <CharacterSpotlight spotContain={isTrue? passArray : sliceChar}/>
        
            {sliceList.map((card) => (
                <div key={card.id} id={card.id} value={card.name} onClick={() => setSliceArray(card)} >
                    <img width='150em' alt='' src={card.image} value={card.name} onClick={setSliceState}/>
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