import React, { Component } from 'react';

import './Description.css';

class Description extends Component {
  render() {
    return (
      <div className="description">
        <hr className="horizontal-rule hr-margin" />
        <p>Chris Sharma is an American rock climber. In 2007, NPR wrote that Sharma
          had been described as the worlds best rock climber. He is known as the master
          of climbing; by making first ascents of many of the hardest lines of the
          Cataluña region in Spain and by opening Sharma Climbing BCN in Barcelona in 2015.</p>
        <hr className="horizontal-rule hr-margin" />
      </div>
    )
  }
}

export default Description;
