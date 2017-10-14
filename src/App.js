import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SSString } from 'react-sevenseg';
import { DigitalClock } from './clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SSString str="React sevenseg" style={{
            transform: 'scale(0.7)',
          }}/>
        </header>
        <p className="App-intro">
          To get started, edit 
          <SSString str="src/App.js" style={{
            transform: 'scale(0.5)',
          }}/>
          and save to reload.
        </p>
        <div>
          <DigitalClock />
        </div>
      </div>
    );
  }
}

export default App;
