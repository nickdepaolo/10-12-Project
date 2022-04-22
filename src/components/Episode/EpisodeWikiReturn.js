import React, { useEffect, useState } from "react";

const EpisodeWikiReturn = (props) => {
    const [wiki, setWiki] = useState('')
    const [episodeName, setEpisodeName] = useState('')

    async function fetchWiki() {
        try {const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=15&exlimit=max&gsrsearch=${props.episodeName}`;
            const res = await fetch(url)
            const data = await res.json();
            const query = data.query.pages
            const parsed = Object.values(query)[0].extract
            {Object.values(query)[0].pageid !== 43794574 ? Object.values(query)[0].pageid !== 65819511 ? setWiki(parsed) : setWiki('') : setWiki('')}
        } catch(error) {
            fetchWiki()
        }
    } 

    useEffect(() =>{
        fetchWiki()
    }, [props.episodeName])

    return(
        <div>
            <h4>{wiki}</h4>
        </div>
    )
}

export default EpisodeWikiReturn