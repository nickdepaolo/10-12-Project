import React, { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import CharacterSearch from '../Character/CharacterSearch';
import LocationSearch from '../Location/LocationSearch';
import EpisodeSearch from '../Episode/EpisodeSearch';
import Home from '../Home/Home'
import Header from '../Header/Header';
import '../Components.css'

const MainRouter = (props) => {
    let charArray = []
    let epiArray = []
    const [charPass, setCharPass] = useState('')
    const [locPass, setLocPass] = useState('')
    const [epiPass, setEpiPass] = useState('')
    const [charTrigger, setPassTrigger] = useState(false)
    const [locTrigger, setLocTrigger] = useState(false)
    const [epiTrigger, setEpiTrigger] = useState(false)

    useEffect(() => {
        setPassTrigger(true)
        charArray.splice(0, 1, charPass)
    },[charPass])

    useEffect(() => {
        setLocTrigger(true);
    }, [locPass])

    useEffect(() => {
        setEpiTrigger(true)
        epiArray.splice(0, 1, epiPass)
    }, [epiPass])

    return(
        <div>
            <Header epiPass={epiPass} charPass={charPass} locPass={locPass} setEpiPass={setEpiPass} setCharPass={setCharPass} setLocPass={setLocPass} />
            <br/>
                
            <Switch>
                <Route exact path='/'><Home/></Route>
                <Route exact path='/CharacterSearch'><CharacterSearch passTrigger={charTrigger} epiPass={setEpiPass} locPass={setLocPass} charPass={charArray}/></Route>
                <Route exact path='/LocationSearch'><LocationSearch locTrigger={locTrigger} locPass={locPass} charPass={setCharPass}/></Route>
                <Route exact path='/EpisodeSearch'><EpisodeSearch epiTrigger={epiTrigger} epiPass={epiArray} charPass={setCharPass}/></Route>
            </Switch>
        </div>
    )
}

export default MainRouter;