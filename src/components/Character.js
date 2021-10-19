import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import CharacterMap from './CharacterMap';
import './Components.css'


const Character = () => {
    const APIURL = 'https://rickandmortyapi.com/api/';
    const [userInput, setUserInput] = useState('');
    const [infoContain, setInfoContain] = useState([])
    const [modalIsOpenAdv, setIsOpenAdv] = useState(false)
    const [ADVAPIURL, setADVAPIURL]= useState('')
    const [displayName, setDisplayName] = useState('')
    const [inputSelect, setInputSelect] = useState(false)
    const [statusSelect, setStatusSelect] = useState(false)
    const [statusValue, setStatusValue] = useState('')
    const [speciesSelect, setSpeciesSelect] = useState(false)
    const [genderSelect, setGenderSelect] = useState(false)

    const submitCharacter = () => {
        fetch(APIURL+`character/?name=`+userInput)
            .then(res => res.json())
            .then(json =>{
               setInfoContain(json.results);
               console.log(json.results)
            })
    }
    
    function openModalAdv() {
      setIsOpenAdv(true);
  }

  function closeModalAdv() {
      setIsOpenAdv(false);
  }

  function buildADVURL() {
    inputSelect===true? setADVAPIURL(APIURL+`character/?name=`+userInput) : setADVAPIURL(APIURL+`character/?`);

    statusSelect===true? ADVAPIURL.endsWith('?')===true? setADVAPIURL(ADVAPIURL+`&status=`+statusValue) : setADVAPIURL(ADVAPIURL+`status=`+statusValue) : setADVAPIURL(ADVAPIURL);

    console.log(ADVAPIURL)
  }

  function advUserInput() {
    userInput.length > 0? setInputSelect(true) : setInputSelect(false);
    console.log(inputSelect)
    buildADVURL()
  }

    return(
        <div>
            <input onChange={(e) => setUserInput(e.target.value)} name="UserInput" />
            <button type="button" onClick={submitCharacter} className={'portalButton'} ></button>
            <br/>
            <button onClick={openModalAdv} >{modalIsOpenAdv?'WubbaLubbaDubDub':'Advanced Search'}</button>
            <br/>
            
            <Modal
            
                closeTimeoutMS={500}
                style={{
                   
                    overlay: {
                    //   alignSelf: 'center',
                    //THIS IS NOT WORKING WILL NOT CENTER THE MODAL IN PAGE
                      maxWidth: 800
                    },
                    content: {
                      position: 'absolute',
                      top: '4em',
                      left: '4em',
                      right: '4em',
                      bottom: '4em',
                      border: '.28em solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '70px',
                      padding: 30,
                      textAlign: 'center',
                      
                      
                    }
                  }}
                isOpen={modalIsOpenAdv}
                onRequestClose={closeModalAdv}>

                <h2>Advanced Search</h2>
                <h5>Name</h5>
                <input onKeyUp={advUserInput} onChange={(e) => setUserInput(e.target.value)} />

                <br/>
                <br/>

                <select>
                    <option>Status</option>
                    <option>Alive</option>
                    <option>Dead</option>
                    <option>Unknown</option>
                </select>

                <select>
                    <option>Species</option>
                    <option>Human</option>
                    <option>Alien</option>
                </select>

                <select>
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Genderless</option>
                    <option>Unknown</option>
                </select>

                <br/>
                <br/>

                <button>Search</button>

                <br/>
                <br/>

                <button onClick={closeModalAdv} >Close</button>

            </Modal>

            <CharacterMap infoContain={infoContain} />

        </div>
    )

}
export default Character