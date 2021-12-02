import React, {useEffect, useState} from "react";
import CharPic from './LocationCharPic'

const LocationCharacter = (props) => {

    const [infoContain, setInfoContain] = useState([])
    const [charContain, setCharContain] = useState('')

    useEffect(() => {
        setCharContain(props.character)
        // mainSearch()
    },[props.character])

    const mainSearch = () => {
        fetch(props.character)
        .then(res => res.json())
        .then(json=> {
            setInfoContain(json);
        })
    }

    return(
        <div>
            <CharPic charPass={props.charPass} infoContain={infoContain}/>
        </div>
    )
}

export default LocationCharacter