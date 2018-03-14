import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <button type="button" className="more-info">
          <a href="https://en.wikipedia.org/wiki/Chris_Sharma" target="_blank" className="link">More Info</a>
        </button>
        <p class="signature copy">Written and coded by
          <a href="https://www.freecodecamp.org/d-pagey" target="_blank" className="freecodecamp copy">Pagey</a>
        </p>
      </div>
    )
  }
}

export default Footer;
