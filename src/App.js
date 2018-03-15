import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Description from './components/Description';
import Footer from './components/Footer';

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
