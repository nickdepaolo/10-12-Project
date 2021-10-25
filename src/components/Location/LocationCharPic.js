import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CharPic = (props) => {

    const [passArray, setPassArray] = useState([]);
    const infoContain = props.infoContain;

    useEffect(() => {
        logChar()
    },[props])

    useEffect(() =>{
        console.log(passArray)
    },[passArray])

    function logChar() {
        let x = []
        fetch(props.infoContain.url)
        .then(res => res.json())
        .then(json => x.push(json))
        .then(setPassArray(x))
    }

    return(
        <div>
            <Link to={{pathname: '/CharacterSearch', state:{passArray: passArray}}}>
            <img width='80' src={infoContain.image}/>
            </Link >
            <h6>{infoContain.name}</h6>
       

        </div>
    )
}

export default CharPic;