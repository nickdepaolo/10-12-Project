import React from "react";
import { Link } from "react-router-dom";
import rickPic from "../../Assets/rickPic.jpeg"
import Ants from "../../Assets/antsInMyEyes.jpeg"
import Ghost from "../../Assets/ghostJar.jpeg"
import Vat from "../../Assets/Vat.jpg"
import PickleRick from "../../Assets/pickleRick.jpg"
import SimpleRick from "../../Assets/simpleRick.png"
import C137 from "../../Assets/C-137.webp"
import Citadel from "../../Assets/Citadel.webp"
import Snake from "../../Assets/snake.jpg"

const Home = () => {

    return(
        <div>
          <br/>
          <div className="homeCardWrapper">

            <div className="homeCard">
              <img className="homePic" src={rickPic}/>
              <h6>Rick Sanchez</h6>
            </div>

            <div className="homeCard">
              <img className="homePic" src={Ants}/>
              <h6>Ants in my eyes Johnson</h6>
            </div>

            <div className="homeCard">
              <img className="homePic" src={Ghost}/>
              <h6>Ghost in a jar</h6>
            </div>

          </div>

          <br/>

          <div className="homeCardWrapper">

            <div className="homeCard">
              <img className="homePic" src={Vat} />
              <h6>The Vat of Acid Episode</h6>
            </div>

            <div className="homeCard">
              <img className="homePic" src={PickleRick}/>
              <h6>Pickle Rick</h6>
            </div>

            <div className="homeCard">
              <img className="homePic" src={SimpleRick}/>
              <h6>The Ricklantis Mixup</h6>
            </div>

          </div>

          <br/>

          <div className="homeCardWrapper">

            <div className="homeCard">
              <img className="homePic" src={C137}/>
              <h6>Earth (C-137)</h6>
            </div>

            <div className="homeCard">
              <img className="homePic" src={Citadel}/>
              <h6>Citadel of Ricks</h6>
            </div>

            <div className="homeCard">
              <img className="homePic" src={Snake}/>
              <h6>Snake Planet</h6>
            </div>

          </div>
          

          <br/>
          <br/>
        </div>

    )
}

export default Home