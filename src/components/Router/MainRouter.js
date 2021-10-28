import React, { useEffect, useState } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import CharacterSearch from '../Character/CharacterSearch';
import LocationSearch from '../Location/LocationSearch';
import Header from '../Header/Header';
import '../Components.css'

const MainRouter = (props) => {
    let charArray = []
    const [charPass, setCharPass] = useState([])
    const [passTrigger, setPassTrigger] = useState(false)

    useEffect(() => {
        pushCharArray()
        console.log(charPass)
    },[charPass])

    useEffect(() => {
        console.log(charArray)
    }, [charArray])

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
                <Route exact path='/CharacterSearch'><CharacterSearch passTrigger={passTrigger} charPass={charArray}/></Route>
                <Route exacy path='/LocationSearch'><LocationSearch charPass={setCharPass}/></Route>
            </Switch>
        </div>
    )
}

export default MainRouter;