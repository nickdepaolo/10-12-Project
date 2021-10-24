import './App.css';

import MainRouter from './components/Router/MainRouter';
import {Route, Link, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <p>Ricktionary</p>
      <Router>
      <MainRouter/>
      </Router>
      {console.log('App page console log')}
    </div>
  );
}

export default App;
