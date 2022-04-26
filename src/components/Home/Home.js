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

  const rickPath ={
    pathname: '/CharacterSearch',
    state: {linkName: 'Rick Sanchez'}
  }

  const antPath = {
    pathname: '/CharacterSearch',
    state: {linkName: 'Ants in my eyes'}
  }

  const ghostPath = {
    pathname: '/CharacterSearch',
    state: {linkName: 'Ghost in a Jar'}
  }

  const vatPath = {
    pathname: '/EpisodeSearch',
    state: {linkName: 'Vat'}
  }

  const picklePath = {
    pathname: '/EpisodeSearch',
    state: {linkName: 'Pickle'}
  }

  const ricklantisPath = {
    pathname: '/EpisodeSearch',
    state: {linkName: 'Ricklantis'}
  }

  const c137Path = {
    pathname: '/LocationSearch',
    state: {linkName: '137'}
  }

  const citadelPath = {
    pathname: '/LocationSearch',
    state: {linkName: 'Citadel of Ricks'}
  }

  const snakePath = {
    pathname: '/LocationSearch',
    state: {linkName: 'Snake Planet'}
  }

    return(
        <div>
          <br/>
          <div className="homeCardWrapper">

            <Link to={rickPath} >
            <div className="homeCard">
              <img className="homePic" src={rickPic}/>
              <h6>Rick Sanchez</h6>
            </div>
            </Link>

            <Link to={antPath}>
            <div className="homeCard">
              <img className="homePic" src={Ants}/>
              <h6>Ants in my Eyes Johnson</h6>
            </div>
            </Link>

            <Link to={ghostPath}>
            <div className="homeCard">
              <img className="homePic" src={Ghost}/>
              <h6>Ghost in a jar</h6>
            </div>
            </Link>

          </div>

          <br/>
          <br/>

          <div className="homeCardWrapper">

            <Link to={vatPath}>
            <div className="homeCard">
              <img className="homePic" src={Vat} />
              <h6>The Vat of Acid Episode</h6>
            </div>
            </Link>

            <Link to={picklePath}>
            <div className="homeCard">
              <img className="homePic" src={PickleRick}/>
              <h6>Pickle Rick</h6>
            </div>
            </Link>

            <Link to={ricklantisPath}>
            <div className="homeCard">
              <img className="homePic" src={SimpleRick}/>
              <h6>The Ricklantis Mixup</h6>
            </div>
            </Link>

          </div>

          <br/>
          <br/>

          <div className="homeCardWrapper">

            <Link to={c137Path}>
            <div className="homeCard">
              <img className="homePic" src={C137}/>
              <h6>Earth (C-137)</h6>
            </div>
            </Link>

            <Link to={citadelPath}>
            <div className="homeCard">
              <img className="homePic" src={Citadel}/>
              <h6>Citadel of Ricks</h6>
            </div>
            </Link>

            <Link to={snakePath}>
            <div className="homeCard">
              <img className="homePic" src={Snake}/>
              <h6>Snake Planet</h6>
            </div>
            </Link>

          </div>
          
          <br/>
          <br/>
          <br/>
          <br/>
          
        </div>

    )
}

export default Home