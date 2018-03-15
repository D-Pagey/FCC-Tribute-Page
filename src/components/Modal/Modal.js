import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  render() {

    return (
      <div className="modal-container">
              <button type="button" name="button" className="modal-btn">
                <i className="material-icons md-14">info_outline</i></button>
              <dialog className="modal-about">
                <button type="button" name="button" className="modal-cancel">
                  <i className="material-icons sm-12">clear</i></button>
                <h4 className="modal-title">Tribute Page</h4>
                <p className="modal-text copy">This is a basic Front End Developer project
                  from the FreeCodeCamp curriculum. The user stories to be completed are:</p>
                <ul className="user-stories">
                  <li className="story copy">I can view a tribute page with an image and text.</li>
                  <li className="story copy">I can click on a link that will take me to an
                    external website with further information on the topic.</li>
                </ul>
                <p className="modal-text copy">This project was coded natively without the
                  use of any libararies or frameworks and it is mobile responsive.
                  The code can be seen on
                  <a href="https://github.com/D-Pagey/Tribute" target="_blank" rel='noreferrer noopener'
                    className="link">Github</a>.</p>
              </dialog>
            </div>
    )
  }
}

export default Modal;
