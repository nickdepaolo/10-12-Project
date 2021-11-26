import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from 'react-router-dom';
import CharacterEpisodeSearch from './CharacterEpisodeSearch'


const CharacterSpotlight = (props) => {

    useEffect(() => {
        console.log(props)
    }, [props])

    const searchSpecies = (e) =>  {
        fetch(`https://rickandmortyapi.com/api/character/?&species=${e}`)
            .then(res => res.json())
            .then(json =>{
                props.setInfoContain(json.results);
                console.log(json.results);
                json.info.next == null ?  props.nextContain('') : props.nextContain(json.info.next);
            })
    }

    const searchGender = (e) => {
        fetch(`https://rickandmortyapi.com/api/character/?&gender=${e}`)
        .then(res => res.json())
        .then(json =>{
            props.setInfoContain(json.results);
            console.log(json.results);
            json.info.next == null ?  props.nextContain('') : props.nextContain(json.info.next);
        })
    }

    const searchType = (e) => {
        fetch(`https://rickandmortyapi.com/api/character/?&type=${e}`)
        .then(res => res.json())
        .then(json =>{
            props.setInfoContain(json.results);
            console.log(json.results)
            json.info.next == null ?  props.nextContain('') : props.nextContain(json.info.next);
        })
    }

    const searchStatus = (e) => {
        fetch(`https://rickandmortyapi.com/api/character/?&status=${e}`)
        .then(res => res.json())
        .then(json =>{
            props.setInfoContain(json.results);
            console.log(json.results);
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
                    <h1>{spot.name}</h1>
                    <img width='300em' alt=''src={spot.image}/>
                    <p onClick={() => searchSpecies(spot.species)}>Species : {spot.species}</p>
                    <p onClick={() => searchGender(spot.gender)}>Gender : {spot.gender}</p>

                    <Link to='/LocationSearch'>
                        <p onClick={() => pushOrigin(spot.origin.name)}>Origin : {spot.origin.name}</p>
                    </Link>

                    <Link to='/LocationSearch'>
                        <p onClick={() => pushLocation(spot.location.name)}>Last Location : {spot.location.name}</p>
                    </Link>

                    <p onClick={() => searchStatus(spot.status)}>{spot.status}</p>
                    <p onClick={() => searchType(spot.type)}>{spot.type}</p>
                    <CharacterEpisodeSearch episodes={spot.episode}/>
                    <h1>________________</h1>
                </div>
            ))}
               
        </div>
    )
}

export default CharacterSpotlight