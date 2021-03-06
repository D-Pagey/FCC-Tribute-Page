import React, { Component } from 'react';

import './index.css';

export default class Modal extends Component {
  state = {
    modal: false,
  }

  handleClick = () => {
    const { modal } = this.state;

    if (modal === false) {
      this.setState({
        modal: true,
      });
    } else {
      this.setState({
        modal: false,
      });
    }
  }

  render() {
    const { modal } = this.state;
    return (
      <div className="modal-container">
        <button
          type="button"
          name="button"
          className="modal-btn"
        >
          <i
            className="material-icons md-14"
            role="button"
            onClick={this.handleClick}
            tabIndex={0}
          >
          info_outline
          </i>
        </button>
        <dialog className="modal-about" open={modal}>
          <button type="button" name="button" className="modal-cancel">
            <i
              className="material-icons sm-12"
              role="button"
              onClick={this.handleClick}
              tabIndex={0}
            >
            clear
            </i>
          </button>
          <h4 className="modal-title">Tribute Page</h4>
          <p className="modal-text">This is a basic Front End Developer project
          from the FreeCodeCamp curriculum. The user stories to be completed are:
          </p>
          <ul className="user-stories">
            <li className="story">I can view a tribute page with an image and text.
            </li>
            <li className="story">I can click on a link that will take me to an
            external website with further information on the topic.
            </li>
          </ul>
          <p className="modal-text">This project was coded in React using
          Create-React-App. The code can be seen on
            <a
              href="https://github.com/D-Pagey/Tribute"
              target="_blank"
              rel="noreferrer noopener"
              className="ghLink"
            > Github
            </a>.
          </p>
        </dialog>
      </div>
    );
  }
}
