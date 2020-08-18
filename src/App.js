import React from 'react';
import logo from './logo.svg';
import './App.css';
import PopChart from './component/PopChart';
import Nav from './component/Nav';
import About from './component/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TableChart from './component/TableChart';


function App() {
  return (
   <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Nav />
           <Switch>
            <Route path = "/about" exact component = {About}/>
            <Route path = "/popchart" exact component = {PopChart}/>
            <Route path = "/tablechart" exact component = {TableChart}/>
          </Switch>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
   </Router>
  );
}


export default App;
