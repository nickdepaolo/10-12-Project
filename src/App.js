import './App.css';
import CharacterSearch from './components/CharacterSearch';
import Failure from './components/Failure';


function App() {


  return (
    <div className="App">
      <p>Ricktionary</p>
      <Failure/>
      <CharacterSearch/>
      {console.log('App page console log')}
    </div>
  );
}

export default App;
