import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import CharacterMap from './CharacterMap';
import '../Components.css'
import loop from "../../Assets/TransformingRing.gif"

const CharacterSearch = (props) => {
  const APIURL = 'https://rickandmortyapi.com/api/character/?';
  const [userInput, setUserInput] = useState('');
  const [infoContain, setInfoContain] = useState([])
  const [nextContain, setNextContain] = useState([])
  const [prevContain, setPrevContain] = useState('')
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
  const [charSelect, setCharSelect] = useState(false)
  const [empty, setEmpty] = useState([])

  useEffect(() => {
  props.passTrigger? setInfoContain(props.charPass) : setEmpty([]);
  },[props.passTrigger])

  useEffect(() => {
    document.getElementById("charMain").scrollIntoView({behavior: 'smooth'});
  },[infoContain])

  useEffect(() => {
    setPrevContain('')
  }, [charSelect])

  async function submitCharacter() {
   try{fetch(APIURL+`&name=`+ userInput)
      .then(res => res.json())
      .then(json =>{
          json.results? setInfoContain(json.results) : setEmpty('');
          json.info? setNextContain(json.info.next) : setEmpty('');
      })
      .then(setUserInput(''))
    }catch(error){console.log('error')}
  }

  const submitADV = () => {
    fetch(ADVURL)
      .then(res => res.json())
      .then(json =>{
          setInfoContain(json.results);
          setNextContain(json.info.next);
      })
  }

  const submitNext = () => {
    fetch(nextContain)
      .then(res => res.json())
      .then(json =>{
        setInfoContain(json.results);
        setNextContain(json.info.next);
        setPrevContain(json.info.prev);
      })
  }
  
  const submitPrev = () => {
    fetch(prevContain)
      .then(res => res.json())
      .then(json =>{
        setInfoContain(json.results);
        setNextContain(json.info.next);
        setPrevContain(json.info.prev);
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
        <div id='charMain'>

          <h4>Character Search</h4>
            <input id='mainInput' onChange={(e) => setUserInput(e.target.value)} name="UserInput" />
            <button type="button" onClick={refreshUsertInput}>Search</button>
            <br/>
            <button onClick={openModalAdv} >{modalIsOpenAdv?'WubbaLubbaDubDub':'Advanced Search'}</button>
            <br/>
            {infoContain > '' ? '' : <h3>Enter a Name or press the search button to pull up a list</h3>}
            <br/>
            {infoContain > '' ? '' : <img src={loop}/>}
            
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
                      {/* <option value='unknown'>Unknown</option> */}
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

            <CharacterMap charSelect={setCharSelect} epiPass={props.epiPass} locPass={props.locPass} nextContain={setNextContain} infoContain={infoContain} setInfoContain={setInfoContain} />
            {prevContain > '' && !charSelect ? <button onClick={submitPrev}> Back </button> : ''}
            {prevContain > '' ? <br/>  : ''}
            {prevContain > '' ? <br/>  : ''}
            {nextContain > '' && !charSelect ? <button onClick={submitNext}> More... </button> : ''}
            <br/>
            <br/>

        </div>
    )

}
export default CharacterSearch