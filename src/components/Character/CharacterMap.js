import CharacterSpotlight from './CharacterSpotlight';
import React, {useEffect, useState, useRef} from 'react';

import '../Components.css'


const CharacterMap = (props) => {
    
    const infoContain = props.infoContain;
    const sliceList = infoContain.slice(1,22)
    const sliceChar = infoContain.slice(0,1)
    const [passArray, setPassArray] = useState([])
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
        document.getElementById("spotLight").scrollIntoView({behavior: 'smooth'})
        setTrue()
    }

    const searchStatus = (e) => {
        fetch(`https://rickandmortyapi.com/api/character/?&status=${e}`)
        .then(res => res.json())
        .then(json =>{
            props.setInfoContain(json.results);
            console.log(json.results);
            document.getElementById("spotLight").scrollIntoView({behavior: 'smooth'});
            props.nextContain(json.info.next);
        })  
    }

    const searchGender = (e) => {
        fetch(`https://rickandmortyapi.com/api/character/?&gender=${e}`)
        .then(res => res.json())
        .then(json =>{
            props.setInfoContain(json.results);
            console.log(json.results);
            document.getElementById("spotLight").scrollIntoView({behavior: 'smooth'});
            props.nextContain(json.info.next);

        })
    }
    
    return(
        <div>
   
            <div id='spotLight'>
                <CharacterSpotlight nextContain={props.nextContain} setInfoContain={props.setInfoContain} spotContain={isTrue? passArray : sliceChar}/>
            </div>
        
            {sliceList.map((card) => (
                <div key={card.id} id={card.id} value={card.name} onClick={() => setSliceArray(card)} >
                    <img width='150em' alt='' src={card.image} value={card.name} onClick={setSliceState}/>
                    <h3>{card.name}</h3>
                    <p>{card.location.name}</p>
                    <p onClick={() => searchGender(card.gender)}>{card.gender}</p>
                    <p onClick={() => searchStatus(card.status)}>{card.status}</p>
                    <h1>________________</h1>
                    <br/>
                </div>
            ))}

        </div>
    )
}

export default CharacterMap;