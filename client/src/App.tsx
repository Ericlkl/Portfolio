import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
