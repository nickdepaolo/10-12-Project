import React from "react";
import { Link } from "react-router-dom";
import '../Components.css'

const Header = () => {

    return(
        <div className='header'>
            <br/>
            <h2>Ricktionary</h2>
            <h3><Link to='/CharacterSearch'>Character Search</Link></h3>
            <h3><Link to='/LocationSearch'>Location Search</Link></h3>
            <br/>
        </div>
    )
}

export default Header;