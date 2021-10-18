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
            <button onClick={openModal} >{modalIsOpen?'WubbaLubbaDubDub':'Advanced Search'}</button>
            <br/>
            <Modal
                closeTimeoutMS={500}
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 50,
                      left: 250,
                      right: 250,
                      bottom: 100,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '3px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '70px',
                      padding: '3em'
                    }
                  }}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}>
                <h2>Advanced Search</h2>
                <input/>
                <br/>
                <select>
                    <option>Status</option>
                    <option>Alive</option>
                    <option>Dead</option>
                    <option>Unknown</option>
                </select>
                <br/>
                <br/>
                <button onClick={closeModal} >Close</button>
            </Modal>
            <CharacterMap infoContain={infoContain} />

        </div>
    )

}
export default Character