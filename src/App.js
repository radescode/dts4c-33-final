import './App.css';

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Loading } from "./components/Loading";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

//react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
       <Navbar />
        <Router>
         
          <Routes>
          
            <Route exact path="/">
            </Route>
            <Route exact path="/Business">
            </Route>
            <Route exact path="/Entertainment">
            </Route>
            <Route exact path="/Sports">
            </Route>
            <Route exact path="/Login">
              
            </Route>
            <Route exact path="/Register">
             
            </Route>
          </Routes>
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
