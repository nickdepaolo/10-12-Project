import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import '../Components.css'

const Header = (props) => {
    const [empty, setEmpty] = useState('')
    const [wiki, setWiki] = useState('')

    function clearStates() {
        props.locPass !== '' && props.locPass > '' ? props.setLocPass([]) : setEmpty('');
    }

    return(
        <div onClick={clearStates} className='header'>
            <br/>
            <h1><Link to='/' style={{color: 'white'}}>Ricktionary</Link></h1>
            <h3><Link to='/CharacterSearch' style={{color: 'white'}}>Character Search</Link></h3>
            <h3><Link to='/LocationSearch' style={{color: 'white'}}>Location Search</Link></h3>
            <h3><Link to='/EpisodeSearch' style={{color: 'white'}}>Episode Search</Link></h3>
            <br/>
            {/* <button onClick={fetchWiki2} >Wiki</button> */}
            <p>{wiki}</p>
        </div>
    )
}

export default Header;