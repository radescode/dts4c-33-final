import './App.css';

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Loading } from "./components/Loading";
//react-router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
       <Navbar />
        <Router>
         
          <Switch>
          
            <Route exact path="/">
              <News key={"general"} pageSize={9} country="id" category="general" />
            </Route>
            <Route exact path="/Business">
              <News key={"business"} pageSize={9} country="id" category="business" />
            </Route>
            <Route exact path="/Entertainment">
              <News key={"entertainment"} pageSize={9} country="id" category="entertainment" />
            </Route>
            <Route exact path="/Sports">
              <News key={"sports"} pageSize={9} country="id" category="sports" />
            </Route>
            <Route exact path="/Login">
              <News key={"login"} pageSize={9} country="id" category="login" />
            </Route>
            <Route exact path="/Register">
              <News  key={"register"} pageSize={9} country="id" category="register" />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

/*
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  );
}

export default App;
*/
