import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import CharacterMap from './CharacterMap';
import './Components.css'


const Character = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const APIURL = 'https://rickandmortyapi.com/api/';
    const [userInput, setUserInput] = useState('');
    const [infoContain, setInfoContain] = useState([])
    const [displayName, setDisplayName] = useState('')

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
        
    //   }

      function closeModal() {
        setIsOpen(false);
      }
    

    const submitCharacter = () => {
        fetch(APIURL+`character/?name=`+userInput)
            .then(res => res.json())
            .then(json =>{
               setInfoContain(json.results);
               console.log(json)
            })
    }
    
   

    return(
        <div>
            <input onChange={(e) => setUserInput(e.target.value)} name="UserInput" />
            <button type="button" onClick={submitCharacter} className={'portalButton'} ></button>
            <br/>
            <button onClick={openModal} >{modalIsOpen?'Close':'Advanced Search'}</button>
            <br/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}>
                <h2>Advanced Search Modal</h2>
                <select>
                    <option>Status</option>
                    <option>Alive</option>
                    <option>Dead</option>
                    <option>Unknown</option>
                </select>
                <br/>
                <button onClick={closeModal} >Close</button>
            </Modal>
            <CharacterMap infoContain={infoContain} />

        </div>
    )

}
export default Character