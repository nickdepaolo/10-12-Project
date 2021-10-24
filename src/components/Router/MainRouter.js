import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import CharacterSearch from '../Character/CharacterSearch';
import LocationSearch from '../Location/LocationSearch';
import Header from '../Header/Header';
import '../Components.css'

const MainRouter = (props) => {

    return(
        <div>
            <Header/>
            <br/>
                
            <Switch>
                <Route exact path='/CharacterSearch'><CharacterSearch/></Route>
                <Route exacy path='/LocationSearch'><LocationSearch/></Route>
            </Switch>
        </div>
    )
}

export default MainRouter;