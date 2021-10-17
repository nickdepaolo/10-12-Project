import React, {useState} from 'react';
// import { Row } from 'reactstrap';

const Contact = (props) => {

    const APIURL = 'https://rickandmortyapi.com/api/';
    const [character, setCharacter] = useState('');
    const [location, setLocation] = useState('Earth (C-137)');
    const [episode, setEpisode] = useState('Acid');

    const submitCharacter = () => {
        fetch(APIURL+`character/?name=`+character)
            .then((res) => res.json())
            .then((props) =>{
                console.log(props.results[0].name
                
                    )
                    setCharacter(props.results[0].name);
                    
            })
            .then(console.log(character+" 1"))
    }

    const submitLocation = () => {
        fetch(APIURL+`location/?name=`+location)
            .then((res) => res.json())
            .then((props) =>{
                console.log(props)
            })
    }

    const submitEpisode = () => {
        fetch(APIURL+`episode/?name=`+episode)
            .then((res) => res.json())
            .then((props) =>{
                console.log(props)
            })
    }

    return(
        <div>
            <h3>Character</h3>
            <input onChange={(e) => setCharacter(e.target.value)} name="Character" />
            <br/>
            <button type="button" onClick={submitCharacter} >Search</button>
            <br/>
            
            <h3>Location</h3>
            <input onChange={(e) => setLocation(e.target.value)} name="Location" />
            <br/>
            <button type="button" onClick={submitLocation}>Search</button>
            <br/>
          
            <h3>Episode</h3>
            <input onChange={(e) => setEpisode(e.target.value)} name="Episode" />
            <br/>
            <button type="button" onClick={submitEpisode}>Search</button>
            {character.length>0?<h1>{character}</h1>:null}
            
        </div>
    )
}

export default Contact;