import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import './components/Header.css';
import Hero from './components/Hero.js';
import './components/Hero.css';
import Stats from './components/Stats.js';
import './components/Stats.css';
import Description from './components/Description.js';
import './components/Description.css';
import Footer from './components/Footer.js';
import './components/Footer.css';

class App extends Component {
  render() {
    return (
      <div className="greybox">
        <div className="greybox-column">
          <Header />
          <Hero />
          <Stats />
          <Description />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
