import React, {useState} from 'react';

const Character = () => {
    const APIURL = 'https://rickandmortyapi.com/api/';
    const [userInput, setUserInput] = useState('');

    const submitCharacter = () => {
        fetch(APIURL+`character/?name=`+userInput)
            .then((res) => res.json())
            .then((props) =>{
                console.log(props.results[0].name
                
                    )
                   
                    
            })
            .then(console.log(" 1"))
    }

    return(
        <div>
            <input onChange={(e) => setUserInput(e.target.value)} name="UserInput" />
            <button type="button" onClick={submitCharacter} >Search</button>

        </div>
    )

}
export default Character