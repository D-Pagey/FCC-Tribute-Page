import React, { Component } from 'react';

class Stats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="details">
        <h4 className="stats-title copy">Stats:</h4>
        <ul className="stats-container">
          <li><span className="stat-name copy">Full Name:</span>
            <span className="stat copy">Chris Omprakash Sharma</span></li>
          <li><span className="stat-name copy">Birthday:</span>
            <span className="stat copy">23rd April 1981</span></li>
          <li><span className="stat-name copy">Nationality:</span>
            <span className="stat copy">American</span></li>
          <li><span className="stat-name copy">Website:</span>
            <span className="stat copy">
              <a href="http://www.chrissharma.com" target="_blank" className="website copy">
                ChrisSharma.com</a></span></li>
        </ul>
      </div>
    )
  }
}

export default Stats;
