import React, {useEffect, useState} from "react";
import CharPic from './LocationCharPic'

const LocationCharacter = (props) => {

    const [infoContain, setInfoContain] = useState([])


    const character = props.character

    useEffect(() => {
        mainSearch()
    },[props])

    const mainSearch = () => {
        fetch(props.character)
        .then(res => res.json())
        .then(json=> {
            setInfoContain(json)
        })
        .then(
            console.log(infoContain)
        )
    }

    return(
        <div>
            <CharPic infoContain={infoContain}/>
        </div>
    )
}

export default LocationCharacter