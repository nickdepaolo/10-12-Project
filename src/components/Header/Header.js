import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Components.css'

const Header = (props) => {
    const [empty, setEmpty] = useState('')

    function clearStates() {
        props.locPass !== '' && props.locPass > '' ? props.setLocPass([]) : setEmpty('');
    }

    return(
        <div onClick={clearStates} className='header'>
            <br/>
            <h2><Link to='/'>Ricktionary</Link></h2>
            <h3><Link to='/CharacterSearch'>Character Search</Link></h3>
            <h3><Link to='/LocationSearch'>Location Search</Link></h3>
            <h3><Link to='/EpisodeSearch'>Episode Search</Link></h3>
            <br/>
        </div>
    )
}

export default Header;