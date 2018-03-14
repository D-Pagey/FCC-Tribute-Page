import React, { Component } from 'react';
import sharma from './sharma.jpg';

class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <hr className="horizontal-rule" />
        <img src={sharma} className="hero-img" />
        <figcaption className="hero-img-caption">Chris Sharma's 2017 US Climbing Road Trip</figcaption>
      </div>
    )
  }
}

export default Hero;
