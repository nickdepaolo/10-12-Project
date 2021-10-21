import CharacterModal from './CharacterModal';
import React, {useState} from 'react';
import './Components.css'


const CharacterMap = (props) => {
    
    let infoContain = props.infoContain;
    const nextContain = props.arrayContain;
    const sliceChar = infoContain.slice(0,1)
    const sliceList = infoContain.slice(1,20)
    const [openCharacterModal, setOpenCharacterModal] = useState(false)

    const submitNext = () => {
        fetch(nextContain)
            .then(res => res.json())
            .then(json =>{
                
               infoContain = json.results;
               console.log(nextContain);
               console.log(json)
            })
    }

    const openModal = () => {
        setOpenCharacterModal(true)
    }

    const closeModal = () => {
        setOpenCharacterModal(false)
    }

    return(
        <div>

            {sliceChar.map((spot) =>(
                <div key={spot.id}>
                    <h1>{spot.name}</h1>
                    <img width='300em' alt=''src={spot.image}/>
                    <p>Species : {spot.species}</p>
                    <p>Gender : {spot.gender}</p>
                    <p>Origin : {spot.origin.name}</p>
                    <p>Last Location : {spot.location.name}</p>
                    <p>{spot.status}</p>
                    <p>{spot.type}</p>
                    <h1>________________</h1>
                    
                </div>
            ))}
           
        
        
            {sliceList.map((card) => (
                <div key={card.id}>
                    <CharacterModal info={card} trigger={openCharacterModal}/>
                    <a>
                        <img width='150em' alt=''  src={card.image}/>
                    </a>
                    <h3>{card.name}</h3>
                    <p>{card.location.name}</p>
                    <p>{card.status}</p>
                    <h1>________________</h1>
                    <br/>
                </div>
            ))}

        </div>
    )
}

export default CharacterMap;