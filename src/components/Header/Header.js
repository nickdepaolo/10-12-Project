import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import '../Components.css'

const Header = (props) => {
    const [empty, setEmpty] = useState('')
    const [wiki, setWiki] = useState('')

    function clearStates() {
        props.locPass !== '' && props.locPass > '' ? props.setLocPass([]) : setEmpty('');
    }

    async function fetchWiki() {
        const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=morty%20smith';
        const res = await fetch(url);
        const data = await res.json();
        const query = data.query.pages
        const parsed = Object.values(query)[0].extract

        setWiki(parsed)
        
        console.log(parsed)
    }

    async function fetchWiki2() {
        try {const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=15&exlimit=max&gsrsearch=catz';
            const res = await fetch(url)
            const data = await res.json();
            const query = data.query.pages
            const parsed = Object.values(query)[0].extract
            setWiki(parsed)
        } catch(error) {
            setWiki('Catch error')
        }
        
    }

    useEffect(() => {
        console.log(wiki)
    }, [wiki])

    return(
        <div onClick={clearStates} className='header'>
            <br/>
            <h2><Link to='/'>Ricktionary</Link></h2>
            <h3><Link to='/CharacterSearch'>Character Search</Link></h3>
            <h3><Link to='/LocationSearch'>Location Search</Link></h3>
            <h3><Link to='/EpisodeSearch'>Episode Search</Link></h3>
            <br/>
            {/* <button onClick={fetchWiki2} >Wiki</button> */}
            <p>{wiki}</p>
        </div>
    )
}

export default Header;