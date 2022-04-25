import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import '../Components.css'
import Logo from '../../Assets/ricktionaryLogo.png'

const Header = (props) => {
    const [empty, setEmpty] = useState('')
    const [wiki, setWiki] = useState('')

    function clearStates() {
        props.locPass !== '' && props.locPass > '' ? props.setLocPass([]) : setEmpty('');
    }

    return(
        <div onClick={clearStates} className='header'>
            <br/>
            <Link to='/'><img id="logo" src={Logo}/></Link>
            <br/>
            <div id="headerButtons">
                <button className="topButton"><Link to='/LocationSearch' className="topLink">Location Search</Link></button>
                <button className="topButton"><Link to='/CharacterSearch' className="topLink">Character Search</Link></button>
                <button className="topButton"><Link to='/EpisodeSearch' className="topLink">Episode Search</Link></button>
            </div>
            <br/>
         
        </div>
    )
}

export default Header;