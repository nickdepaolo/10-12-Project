import React, { useEffect } from 'react';

const CharPic = (props) => {

    const infoContain = props.infoContain

    useEffect(() => {
        console.log(props)
    },[props])

    return(
        <div>
            <img width='90' src={infoContain.image}/>
            <h6>{infoContain.name}</h6>
       

        </div>
    )
}

export default CharPic;