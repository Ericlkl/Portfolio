import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Slider/>
        <AboutMe/>
        <Footer/>
      </div>
    );
  }
}

export default App;
