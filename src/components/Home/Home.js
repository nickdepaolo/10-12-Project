import React from "react";
import dance from "../../Assets/dance.gif"

const Home = () => {

    return(
        <div>
          <h1>Welcome to the Rictionary!</h1>
          <img src={dance}/>
          <h3>Your source for a complete referce for Rick and Morty</h3>
          <br/>
          <h3>Select one of the search options above to get started</h3>

        </div>
    )
}

export default Home