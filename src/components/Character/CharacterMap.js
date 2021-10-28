import CharacterSpotlight from './CharacterSpotlight';
import React, {useEffect, useState, useRef} from 'react';

import '../Components.css'


const CharacterMap = (props) => {
    
    const infoContain = props.infoContain;
    const sliceList = infoContain.slice(1,22)
    const sliceChar = infoContain.slice(0,1)
    const spotlight = document.getElementById("spotLight")
    const myRef = useRef(null)
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
    
    function setSliceArray(e) {
        let sliceArray = []
        sliceArray.push(e)
        setPassArray(sliceArray)
    }
    
    function setSliceState() {
        
        spotlight.scrollIntoView({behavior: 'smooth'})
        setSpotState(passArray)
        setTrue()
    }
    
    return(
        <div>
   
            <div id='spotLight'>
                <CharacterSpotlight spotContain={isTrue? passArray : sliceChar}/>
            </div>
        
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