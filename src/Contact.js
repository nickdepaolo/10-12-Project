import React, {useState} from 'react';
import { Row } from 'reactstrap';

const Contact = (props) => {

    const APIURL = 'https://rickandmortyapi.com/api/';
    const [character, setCharacter] = useState('');
    const [location, setLocation] = useState('');
    const [episode, setEpisode] = useState('')

    return(
        <div>
            <h3>Character</h3>
            <input onChange={(e) => setCharacter(e.target.value)} name="Character" />
            <br/>
            <button type="button">Search</button>
            <br/>
            
            <h3>Location</h3>
            <input onChange={(e) => setLocation(e.target.value)} name="Location" />
            <br/>
            <button type="button">Search</button>
            <br/>
          
            <h3>Episode</h3>
            <input onChange={(e) => setEpisode(e.target.value)} name="Episode" />
            <br/>
            <button type="button">Search</button>
            {console.log(character, location, episode)}
        </div>
    )
}

export default Contact;