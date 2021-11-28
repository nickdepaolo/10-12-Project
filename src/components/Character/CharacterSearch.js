import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import CharacterMap from './CharacterMap';
import '../Components.css'

const CharacterSearch = (props) => {
  const APIURL = 'https://rickandmortyapi.com/api/character/?';
  const [userInput, setUserInput] = useState('');
  const [infoContain, setInfoContain] = useState([])
  const [nextContain, setNextContain] = useState([])
  const [modalIsOpenAdv, setIsOpenAdv] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [ADVinput, setADVinput] = useState('')
  const [statusValue, setStatusValue] = useState('')
  const [ADVstatus, setADVstatus] = useState('')
  const [speciesValue, setSpeciesValue] = useState('')
  const [ADVspecies, setADVspecies] = useState('')
  const [genderValue, setGenderValue] = useState('')
  const [ADVgender, setADVgender] = useState('')
  const [ADVURL, setADVURL] = useState('')
  const [empty, setEmpty] = useState([])

  useEffect(() => {
  props.passTrigger? setInfoContain(props.charPass) : setEmpty([]);
  },[props.passTrigger])

  useEffect(() => {
    document.getElementById("spotLight").scrollIntoView({behavior: 'smooth'});
  },[infoContain])

  const submitCharacter = () => {
    fetch(APIURL+`&name=`+ userInput)
      .then(res => res.json())
      .then(json =>{
          setInfoContain(json.results);
          setNextContain(json.info.next);
          console.log(json.results)
          console.log(json.info)
      })
      .then(setUserInput(''))
  }

  const submitADV = () => {
    fetch(ADVURL)
      .then(res => res.json())
      .then(json =>{
          setInfoContain(json.results);
          setNextContain(json.info.next);
          console.log(json.results)
      })
  }

  const submitNext = () => {
    fetch(nextContain)
      .then(res => res.json())
      .then(json =>{
        setInfoContain(json.results)
          setNextContain(json.info.next);
          console.log(json);
      })
  }
    
  function openModalAdv() {
    setIsOpenAdv(true); 
  }

  function closeModalAdv() {
    setIsOpenAdv(false);
  }
  
  function advUserInput() {
    inputValue.length > 0? 
    setADVinput('&name='+inputValue):
    setADVinput('')
  }
  
  function advStatus() {
    setStatusValue(document.getElementById('status').value)

    document.getElementById('status').value > ''? 
      setADVstatus(`&status=`+statusValue) : 
      setADVstatus('')
  }

  function advSpecies() {
    setSpeciesValue(document.getElementById('species').value)

    document.getElementById('species').value > ''? 
      setADVspecies(`&species=`+speciesValue) : 
      setADVspecies('')
  }

  function advGender() {
    setGenderValue(document.getElementById('gender').value)

    document.getElementById('gender').value > ''? 
      setADVgender(`&gender=`+genderValue) : 
      setADVgender('')
  }
  
  function refreshADVAPIURL() {
    setADVURL(APIURL + ADVinput + ADVstatus + ADVspecies + ADVgender);
    console.log(ADVURL)
    advStatus()
    advSpecies()
    advGender()
    advUserInput()
  }

  function refreshUsertInput() {
    userInput > '' ? setUserInput(document.getElementById('mainInput').value) : setEmpty([]);
    submitCharacter()
  }

    return(
        <div>
          <h4>Character Search</h4>
            <input id='mainInput' onChange={(e) => setUserInput(e.target.value)} name="UserInput" />
            <button type="button" onClick={refreshUsertInput}>Search</button>
            <br/>
            <button onClick={openModalAdv} >{modalIsOpenAdv?'WubbaLubbaDubDub':'Advanced Search'}</button>
            <br/>
            
            <Modal
                id='ADVmodal'
                closeTimeoutMS={500}
                isOpen={modalIsOpenAdv}
                onRequestClose={closeModalAdv}>

                <form onMouseMove={refreshADVAPIURL}>
                  <h2>Advanced Search</h2>
                  <h5>Name</h5>
                  <input onKeyUp={(e) => setInputValue(e.target.value)}  onChange={refreshADVAPIURL}/>

                  <br/>
                  <br/>

                  <select id='status' onChange={advStatus}>
                      <option value=''>Status</option>
                      <option value='alive'>Alive</option>
                      <option value='dead'>Dead</option>
                      <option value='unknown'>Unknown</option>
                  </select>

                  <select id='species' onChange={advSpecies}>
                      <option value=''>Species</option>
                      <option value='human'>Human</option>
                      <option value='alien'>Alien</option>
                      <option value='robot'>Robot</option>
                  </select>

                  <select id='gender' onChange={advGender} >
                      <option value=''>Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='genderless'>Genderless</option>
                      <option value='unknown'>Unknown</option>
                  </select>

                  <br/>
                  <br/>
                  <br/>
                  <br/>
                    
                </form>
              
                <button onClick={closeModalAdv}>Close</button>
                <br/>
                <br/>
                <button  onClick={submitADV} onMouseUp={closeModalAdv}>Search</button>

            </Modal>

            <CharacterMap epiPass={props.epiPass} locPass={props.locPass} nextContain={setNextContain} infoContain={infoContain} setInfoContain={setInfoContain} />

            {nextContain > ''? <button onClick={submitNext}>More...</button> : ''}
            <br/>
            <br/>

        </div>
    )

}
export default CharacterSearch