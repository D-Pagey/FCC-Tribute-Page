import React from 'react';

import './index.css';
import Modal from '../Modal';

export default function Header() {
  return (
    <div className="header">
      <h1 className="title">Chris Sharma</h1>
      <Modal />
      <p className="headline">One of the world&apos;s best rock climbers.</p>
    </div>
  );
}
