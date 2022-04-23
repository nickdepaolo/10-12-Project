import './App.css';

import MainRouter from './components/Router/MainRouter';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <Router>
        <MainRouter/>
      </Router>
    </div>
  );
}

export default App;
