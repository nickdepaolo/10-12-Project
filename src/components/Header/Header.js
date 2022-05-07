import React from "react";
import { Link } from "react-router-dom";
import '../Components.css'
import Logo from '../../Assets/ricktionaryLogo.png'

const Header = (props) => {
  
    function clearStates() {
        props.locPass !== '' && props.locPass && props.setLocPass([]) ;
    }

    return(
        <div onClick={clearStates} className='header'>
            <br/>
            <Link to='/'><img id="logo" src={Logo} alt='Ricktionary'/></Link>
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