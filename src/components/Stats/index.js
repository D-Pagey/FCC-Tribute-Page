import React from 'react';

import './index.css';

export default function Stats() {
  return (
    <div className="details">
      <h4 className="stats-title">Stats:</h4>
      <ul className="stats-container">
        <li><span className="stat-name">Full Name:</span>
          <span className="stat">Chris Omprakash Sharma</span></li>
        <li><span className="stat-name">Birthday:</span>
          <span className="stat">23rd April 1981</span></li>
        <li><span className="stat-name">Nationality:</span>
          <span className="stat">American</span></li>
        <li><span className="stat-name">Website:</span>
          <span className="stat">
            <a href="http://www.chrissharma.com" target="_blank" rel='noreferrer noopener'
              className="website">ChrisSharma.com</a></span></li>
      </ul>
    </div>
  )
}
