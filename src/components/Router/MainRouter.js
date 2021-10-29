import React, { useEffect, useState } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import CharacterSearch from '../Character/CharacterSearch';
import LocationSearch from '../Location/LocationSearch';
import EpisodeSearch from '../Episode/EpisodeSearch';
import Header from '../Header/Header';
import '../Components.css'

const MainRouter = (props) => {
    let charArray = []
    let locObject = ''
    const [charPass, setCharPass] = useState([])
    const [locPass, setLocPass] = useState('')
    const [epiPass, setEpiPass] = useState('')
    const [charTrigger, setPassTrigger] = useState(false)
    const [locTrigger, setLocTrigger] = useState(false)

    useEffect(() => {
        pushCharArray()
        console.log(charPass)
    },[charPass])

    useEffect(() => {
        console.log(charArray)
    }, [charArray])

    useEffect(() => {
        setLocTrigger(true);
        console.log(locPass)
    }, [locPass])

    function pushCharArray() {
        console.log('push')
        setPassTrigger(true)
        charArray.splice(0, 1, charPass)
    }

    return(
        <div>
            <Header/>
            <br/>
                
            <Switch>
                <Route exact path='/CharacterSearch'><CharacterSearch locPass={setLocPass} passTrigger={charTrigger} charPass={charArray}/></Route>
                <Route exact path='/LocationSearch'><LocationSearch locTrigger={locTrigger} locPass={locPass} charPass={setCharPass}/></Route>
                <Route exact path='/EpisodeSearch'><EpisodeSearch charPass={setCharPass}/></Route>
            </Switch>
        </div>
    )
}

export default MainRouter;