import React from 'react';

import './index.css';
import sharma from './sharma.jpg';

export default function Hero() {
  return (
    <div className="hero-container">
      <hr className="horizontal-rule" />
      <img
        src={sharma}
        className="hero-img"
        alt="Chris Sharma climbing in the US."
      />
      <figcaption className="hero-img-caption">Chris Sharma&apos;s 2017 US Climbing
       Road Trip
      </figcaption>
    </div>
  );
}
