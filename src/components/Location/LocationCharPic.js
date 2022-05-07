import React from 'react';
import { Link } from 'react-router-dom';

const CharPic = (props) => {

    const infoContain = props.infoContain

    function setCharPass() {
        props.charPass(props.infoContain)
    }

    return(
        <div>
            <Link onClick={setCharPass} to='/CharacterSearch'>
            <img width='80' src={infoContain.image} alt='Location'/>
            </Link >
            <h6>{infoContain.name}</h6>
       

        </div>
    )
}

export default CharPic;