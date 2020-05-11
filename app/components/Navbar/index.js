import React from 'react';
import './Navbar.scss';
import 'bootstrap/js/src/collapse.js';

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navbar"
      >
        <a className="navbar-brand" href="#">
          High Quality
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              About <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Layout
            </a>
            <a className="nav-item nav-link" href="#">
              Components
            </a>
            <a className="nav-item nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
