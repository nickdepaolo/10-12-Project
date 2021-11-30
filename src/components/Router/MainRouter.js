import React, { useEffect, useState } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import CharacterSearch from '../Character/CharacterSearch';
import LocationSearch from '../Location/LocationSearch';
import EpisodeSearch from '../Episode/EpisodeSearch';
import Header from '../Header/Header';
import '../Components.css'

const MainRouter = (props) => {
    let charArray = []
    let epiArray = []
    let locObject = ''
    const [charPass, setCharPass] = useState('')
    const [locPass, setLocPass] = useState('')
    const [epiPass, setEpiPass] = useState('')
    const [charTrigger, setPassTrigger] = useState(false)
    const [locTrigger, setLocTrigger] = useState(false)
    const [epiTrigger, setEpiTrigger] = useState(false)

    useEffect(() => {
        setPassTrigger(true)
        charArray.splice(0, 1, charPass)
        console.log(charPass)
    },[charPass])

    useEffect(() => {
        setLocTrigger(true);
        console.log(locPass)
    }, [locPass])

    useEffect(() => {
        setEpiTrigger(true)
        epiArray.splice(0, 1, epiPass)
        console.log(epiPass)
    }, [epiPass])

    return(
        <div>
            <Header/>
            <br/>
                
            <Switch>
                <Route exact path='/CharacterSearch'><CharacterSearch passTrigger={charTrigger} epiPass={setEpiPass} locPass={setLocPass} charPass={charArray}/></Route>
                <Route exact path='/LocationSearch'><LocationSearch locTrigger={locTrigger} locPass={locPass} charPass={setCharPass}/></Route>
                <Route exact path='/EpisodeSearch'><EpisodeSearch epiTrigger={epiTrigger} epiPass={epiArray} charPass={setCharPass}/></Route>
            </Switch>
        </div>
    )
}

export default MainRouter;