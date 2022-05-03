import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from 'react-router-dom';
import CharacterEpisodeSearch from './CharacterEpisodeSearch'


const CharacterSpotlight = (props) => {

    const searchSpecies = (e) =>  {
        fetch(`https://rickandmortyapi.com/api/character/?&species=${e}`)
            .then(res => res.json())
            .then(json =>{
                props.setInfoContain(json.results);
                json.info.next == null ?  props.nextContain('') : props.nextContain(json.info.next);
            })
    }

    const searchGender = (e) => {
        fetch(`https://rickandmortyapi.com/api/character/?&gender=${e}`)
        .then(res => res.json())
        .then(json =>{
            props.setInfoContain(json.results);
            json.info.next == null ?  props.nextContain('') : props.nextContain(json.info.next);
        })
    }

    const searchType = (e) => {
        fetch(`https://rickandmortyapi.com/api/character/?&type=${e}`)
        .then(res => res.json())
        .then(json =>{
            props.setInfoContain(json.results);
            json.info.next == null ?  props.nextContain('') : props.nextContain(json.info.next);
        })
    }

    const searchStatus = (e) => {
        fetch(`https://rickandmortyapi.com/api/character/?&status=${e}`)
        .then(res => res.json())
        .then(json =>{
            props.setInfoContain(json.results);
            json.info.next == null ?  props.nextContain('') : props.nextContain(json.info.next);
        })  
    }

    const pushOrigin = (e) => {
        props.locPass(e)
    }

    const pushLocation = (e) => {
        props.locPass(e)
    }

    return(
        <div id='spotlight'>

            {props.spotContain.map((spot) =>(
                
                <div key={spot.id}>

                        <img width='300em' alt=''src={spot.image}/>
                        
                        <div id='charCard'>

                        <h1>{spot.name}</h1>

                        {spot.species === 'unknown' ? <h3>Species Unknown</h3> : <h3 className='pointer' onClick={() => searchSpecies(spot.species)}>Species : {spot.species}</h3>}

                        {spot.gender === 'unknown' ? <h3>Gender Unknown</h3> : <h3 className='pointer' onClick={() => searchGender(spot.gender)}>Gender : {spot.gender}</h3>}
                        
                        {spot.origin.name === 'unknown' ? <h3>Origin Unknown</h3> : <h3 className='pointer' onClick={() => pushOrigin(spot.origin.name)}><Link to='/LocationSearch'>Origin : {spot.origin.name}</Link></h3>}
                        
                        {spot.location.name === 'unknown' ? '' : <h3 className='pointer' onClick={() => pushLocation(spot.location.name)}><Link to='/LocationSearch'>Last Location : {spot.location.name}</Link></h3>}
                        
                        {spot.status === 'unknown' ? <h3>Status Unknown</h3> : <h3 className='pointer' onClick={() => searchStatus(spot.status)}>{spot.status}</h3>}

                        <h3 className='pointer' onClick={() => searchType(spot.type)}>{spot.type}</h3>

                        </div>

                        <CharacterEpisodeSearch epiPass={props.epiPass} episodes={spot.episode}/>

                        <h1>________________</h1>

                    </div>
                
            ))}
               
        </div>
    )
}

export default CharacterSpotlight