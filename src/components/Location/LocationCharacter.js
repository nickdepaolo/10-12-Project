import React, {useEffect, useState} from "react";
import CharPic from './LocationCharPic'

const LocationCharacter = (props) => {

    const [infoContain, setInfoContain] = useState([])

    useEffect(() => {
        mainSearch();
        return() =>{
            setInfoContain({})
        }
    },[props.character]) //eslint-disable-line react-hooks/exhaustive-deps

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