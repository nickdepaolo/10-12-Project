import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import CharacterMap from './CharacterMap';
import './Components.css'


const Character = () => {
    const APIURL = 'https://rickandmortyapi.com/api/character/?';
    const [userInput, setUserInput] = useState('');
    const [infoContain, setInfoContain] = useState([])
    const [modalIsOpenAdv, setIsOpenAdv] = useState(false)
    // const [ADVAPIURL, setADVAPIURL]= useState('')
    const [displayName, setDisplayName] = useState('')
    const [inputSelect, setInputSelect] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [ADVinput, setADVinput] = useState('')
    const [statusSelect, setStatusSelect] = useState(false)
    const [statusValue, setStatusValue] = useState('')
    const [ADVstatus, setADVstatus] = useState('')
    const [speciesSelect, setSpeciesSelect] = useState(false)
    const [speciesValue, setSpeciesValue] = useState('')
    const [ADVspecies, setADVspecies] = useState('')
    const [genderSelect, setGenderSelect] = useState(false)
    const [genderValue, setGenderValue] = useState('')
    const [ADVgender, setADVgender] = useState('')
    const [URL, setURL] = useState('')

    

    useEffect(() => {
      console.log('useEffect ' + ADVAPIURL)
    }, [])

    const submitCharacter = () => {
        fetch(APIURL+`&name=`+userInput)
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
      setStatusValue('');
      setUserInput('');
      setSpeciesValue('');
      setGenderValue('');
      setInputSelect(false);
      setStatusSelect(false);
      setSpeciesSelect(false);
      setGenderSelect(false)
      console.log(`close modal ${ADVAPIURL}`)
  }
  
  function advUserInput() {
    inputValue.length > 0? 
      lockADVinput() : 
      setInputSelect(false);

    setADVinput('&name='+inputValue)
    setInputSelect(true)
  }

  function lockADVinput() {
    
    

    console.log('Input Select '+inputSelect);
    refreshADVAPIURL()
  }
  
  function advStatus() {
    setStatusValue(document.getElementById('status').value)

    statusValue.length > 1?
      setStatusSelect(true):
      setStatusSelect(false);

    statusSelect? setADVstatus(`&status=`+statusValue) : setADVstatus('')

    console.log('Status Value '+statusValue);

  }
  
  function checkURL () {
    console.log(URL)
  }

  function refreshADVAPIURL() {
    setTimeout(function() {
      setURL(APIURL + ADVinput + ADVstatus + ADVspecies + ADVgender);
    }, 100);
  }
  let ADVAPIURL = APIURL + ADVinput + ADVstatus + ADVspecies + ADVgender

    return(
        <div>
            <input onChange={(e) => setUserInput(e.target.value)} name="UserInput" />
            <button type="button" onClick={submitCharacter} className={'portalButton'} ></button>
            <br/>
            <button onClick={openModalAdv} >{modalIsOpenAdv?'WubbaLubbaDubDub':'Advanced Search'}</button>
            <br/>
            <button onClick={checkURL} >Check ADVAPIURL</button>
            
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
                <input onKeyUp={advUserInput} onChange={(e) => setInputValue(e.target.value)} />

                <br/>
                <br/>

                <select id="status" onClick={advStatus} >
                    <option value='1'>Status</option>
                    <option value='alive'>Alive</option>
                    <option value='dead'>Dead</option>
                    <option value='unknown'>Unknown</option>
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
                  
                <button onClick={checkURL}>Check ADVAPIURL</button>
                <button onClick={closeModalAdv} >Close</button>

            </Modal>

            <CharacterMap infoContain={infoContain} />

        </div>
    )

}
export default Character