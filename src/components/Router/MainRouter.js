import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import CharacterSearch from '../Character/CharacterSearch';
import LocationSearch from '../Location/LocationSearch';

const MainRouter = () => {

    return(
        <div>
            <ul>
                <li><Link to='/CharacterSearch'>Character Search</Link></li>
                <li><Link to='/LocationSearch'>Location Search</Link></li>
            </ul>
            <Switch>
                <Route exact path='/CharacterSearch'><CharacterSearch/></Route>
                <Route exacy path='/LocationSearch'><LocationSearch/></Route>
            </Switch>
        </div>
    )
}

export default MainRouter;