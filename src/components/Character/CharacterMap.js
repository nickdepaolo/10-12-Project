import CharacterSpotlight from './CharacterSpotlight';
import React, {useEffect, useState} from 'react';
import '../Components.css'


const CharacterMap = (props) => {
    
    const infoContain = props.infoContain;
    let sliceList = infoContain.slice(1,22)
    const sliceChar = infoContain.slice(0,1)
    const [passArray, setPassArray] = useState([])
    const [isTrue, setIsTrue] = useState(false)

    useEffect(() =>{
        setIsTrue(false)
        props.charSelect(false)
    }, [props.infoContain]) //eslint-disable-line react-hooks/exhaustive-deps

    function setTrue() {
        setIsTrue(true);
    }
    
    function setSliceArray(e) {
        let sliceArray = []
        props.charSelect(true)
        sliceArray.push(e)
        setPassArray(sliceArray)
    }
    
    function setSliceState() {
        document.getElementById("spotLight").scrollIntoView({behavior: 'smooth'})
        setTrue()
    }
    
    return(
        <div>
   
            <div id='spotLight'>
                <CharacterSpotlight epiPass={props.epiPass} locPass={props.locPass} nextContain={props.nextContain} setInfoContain={props.setInfoContain} spotContain={isTrue? passArray : sliceChar}/>
            </div>
        
            {isTrue? '' : sliceList.map((card) => (
                <div key={card.id} id={card.id} value={card.name} onClick={() => setSliceArray(card)} >
                    <img className='pointer' width='150em' alt='' src={card.image} value={card.name} onClick={setSliceState}/>
                    <h3 className='pointer'>{card.name}</h3>
                    <h1>________________</h1>
                    <br/>
                </div>
            ))}

        </div>
    )
}

export default CharacterMap;