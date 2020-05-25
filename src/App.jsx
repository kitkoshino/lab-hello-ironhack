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
        <div className="App-second-section">
          <div className="items-second-section">
            <img src="/images/icon1.png" alt=""/> 
            <h2>Declarative</h2>
            <p>React makes it painless to create interative UIs.</p> 
          </div>
          <div className="items-second-section">
            <img src="/images/icon2.png" alt=""/>  
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="items-second-section">
            <img src="/images/icon3.png" alt=""/>  
            <h2>Single Way</h2>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="items-second-section">
            <img src="/images/icon4.png" alt=""/>  
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on moderns browsers.</p>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
