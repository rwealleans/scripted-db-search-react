import React, { Component } from 'react';
import TestCases from './TestCases.js'
import logo from './logo.svg';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyBtrRNrWZNZrRfAXJYaSeZ1nkgxxOrp2ks",
      authDomain: "scripted-org.firebaseapp.com",
      databaseURL: "https://scripted-org.firebaseio.com",
      projectId: "scripted-org",
      storageBucket: "scripted-org.appspot.com",
      messagingSenderId: "436190267084"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Firebase Database Find And Go Seek (in React!)</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/TestCases.js</code> and save to reload.
        </p>
        <TestCases />
      </div>
    );
  }
}

export default App;
