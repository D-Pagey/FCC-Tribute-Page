import React, { Component } from 'react';

import './Header.css';
import Modal from '../Modal';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">Chris Sharma</h1>
        <Modal />
        <p className="headline">One of the world's best rock climbers.</p>
      </div>
    )
  }
}

export default Header;
