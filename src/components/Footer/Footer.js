import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <button type="button" className="more-info">
        <a href="https://en.wikipedia.org/wiki/Chris_Sharma"
          target="_blank" rel='noreferrer noopener' className="link">More Info</a>
      </button>
      <p className="signature">Written and coded by <a
        href="https://www.freecodecamp.org/d-pagey" target="_blank" 
        rel='noreferrer noopener' className="freecodecamp">Pagey</a>
      </p>
    </div>
  )
}

export default Footer;
