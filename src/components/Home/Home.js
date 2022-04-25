import React from "react";
import dance from "../../Assets/dance.gif"
import synthwave from "../../Assets/synthwave.jpg"


const Home = () => {

    return(
        <div>
          <h1>Welcome to the Rictionary!</h1>
          <img src={dance}/>
          <h3>Your source for a complete reference for Rick and Morty</h3>
          <br/>
          <h3>Select one of the search options above to get started</h3>

        </div>
    )
}

export default Home