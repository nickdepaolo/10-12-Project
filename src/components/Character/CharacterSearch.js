import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import CharacterMap from './CharacterMap';
import '../Components.css'
import loop from "../../Assets/TransformingRing.gif"
import birdperson from "../../Assets/birdperson.jpeg"
import beth from "../../Assets/beth.jpeg"
import drWong from "../../Assets/drWong.jpeg"
import conroy from "../../Assets/conroy.jpeg"

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
  const [homeState, setHomeState] = useState('')
  const [empty, setEmpty] = useState([])
  const location = useLocation()
  const {linkName} = location.state !== undefined? location.state : ''

  useEffect(() => {
    linkName !== undefined? submitLinkCharacter(linkName) : setEmpty('')
  }, [linkName])
  
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

  async function submitLinkCharacter(e) {
    try{fetch(APIURL+`&name=`+ e)
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
            <input id='mainInput' className='searchInput' onChange={(e) => setUserInput(e.target.value)} name="UserInput" />
            <button type="button" className='searchButton' onClick={refreshUsertInput}>Search</button>
            <br/>
            <button onClick={openModalAdv} id='advButton' >{modalIsOpenAdv?'WubbaLubbaDubDub':'Advanced Search'}</button>
            <br/>
            <br/>
            <br/>
            {infoContain > '' ? '' : <div className='flexWrapper'>
              <div className='flexCol'>
                <div className='homeCol'>
                  <div className='homeCard'>
                    <img className='homePic' src={birdperson}/>
                    <h6>Birdperson</h6>
                  </div>
                  <br/>
                  <div className='homeCard'>
                    <img className='homePic' src={drWong}/>
                    <h6>Dr. Wong</h6>
                  </div>
                </div>
              </div>
              <img src={loop}/>
              <div className='flexCol'>
                <div className='homeCol'>
                  <div className='homeCard'>
                    <img className='homePic' src={beth}/>
                    <h6>Beth Smith</h6>
                  </div>
                  <br/>
                  <div className='homeCard'>
                    <img className='homePic' src={conroy}/>
                    <h6>Conroy</h6>
                  </div>
                </div>
              </div>
              </div>}
            
            
            <Modal
                id='ADVmodal'
                closeTimeoutMS={500}
                isOpen={modalIsOpenAdv}
                onRequestClose={closeModalAdv}>

                <form onMouseMove={refreshADVAPIURL}>
                  <h2>Advanced Search</h2>
                  <h5>Name</h5>
                  <input className='searchInput' onKeyUp={(e) => setInputValue(e.target.value)}  onChange={refreshADVAPIURL}/>

                  <br/>
                  <br/>

                  <select className='advSelect' id='status' onChange={advStatus}>
                      <option value=''>Status</option>
                      <option value='alive'>Alive</option>
                      <option value='dead'>Dead</option>
                      {/* <option value='unknown'>Unknown</option> */}
                  </select>

                  <select className='advSelect' id='species' onChange={advSpecies}>
                      <option value=''>Species</option>
                      <option value='human'>Human</option>
                      <option value='alien'>Alien</option>
                      <option value='robot'>Robot</option>
                  </select>

                  <select className='advSelect' id='gender' onChange={advGender} >
                      <option value=''>Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='genderless'>Genderless</option>
                      <option value='unknown'>Unknown</option>
                  </select>

                  <br/>
                  <br/>
                  <br/>
                    
                </form>
              
                <button className='modalButton' onClick={closeModalAdv}>Close</button>
                <br/>
                <br/>
                <button className='modalButton' onClick={submitADV} onMouseUp={closeModalAdv}>Search</button>

            </Modal>

            <CharacterMap charSelect={setCharSelect} epiPass={props.epiPass} locPass={props.locPass} nextContain={setNextContain} infoContain={infoContain} setInfoContain={setInfoContain} />
            {prevContain > '' && !charSelect ? <button className='moreButton' onClick={submitPrev}> Back </button> : ''}
            {prevContain > '' ? <br/>  : ''}
            {prevContain > '' ? <br/>  : ''}
            {nextContain > '' && !charSelect ? <button className='moreButtonChar' onClick={submitNext}> More... </button> : ''}
            <br/>
            <br/>

        </div>
    )

}
export default CharacterSearch