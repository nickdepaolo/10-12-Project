import React, {useState, useEffect} from 'react';
import CharacterMap from './CharacterMap';
import portal from '../Assets/portal.gif'


const Character = () => {
    const APIURL = 'https://rickandmortyapi.com/api/';
    const [userInput, setUserInput] = useState('');
    const [infoContain, setInfoContain] = useState([])
    const [displayName, setDisplayName] = useState('')
    

    const submitCharacter = () => {
        fetch(APIURL+`character/?name=`+userInput)
            .then(res => res.json())
            .then(json =>{
               setInfoContain(json.results);
               
               setInfo()
            })
           
    }
    
    const setInfo = () => {
        console.log(infoContain);
        
    }

    return(
        <div>
            <input onChange={(e) => setUserInput(e.target.value)} name="UserInput" />
            <button type="button" onClick={submitCharacter} className={'portalButton'} >Search</button>
           <br/>
           <br/>
            <img src={portal} width='200em' />
            <CharacterMap infoContain={infoContain} />

        </div>
    )

}
export default Character