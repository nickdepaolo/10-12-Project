import './App.css';
import Contact from './Contact';
import Character from './Character';
// import {useEffect} from 'react';

function App(props) {


  return (
    <div className="App">
      <p>10-12 Project</p>
      <Contact/>
      <Character/>
      {console.log(props)}
    </div>
  );
}

export default App;
