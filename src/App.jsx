import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/images/ironhack-logo.svg" className="App-logo" alt="logo" />
          <img src="/images/menu-top.svg" className="App-menu-top" alt="menu" />

        </header>
        <div className="App-first-section">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to became a Ninja developer.</p>
          <button>Awesome!</button>
        </div>
      </div>
    );
  }
}

export default App;
