import React from "react";
import loop from "../../Assets/dance.gif"

const Home = () => {

    return(
        <div>
          <h1>Welcome to the Rictionary!</h1>
          <img src={loop}/>
          <h3>Your source for a total referce for Rick and Morty</h3>
          <br/>
          <h3>Select one of the search options above to get started</h3>

        </div>
    )
}

export default Home