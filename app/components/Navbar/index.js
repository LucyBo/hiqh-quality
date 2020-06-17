import React, { Component } from "react";
import './Navbar.scss';
import 'bootstrap/js/src/collapse.js';
import {Route, Switch, NavLink} from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import FirstSection from '../FirstSection';
import Slider from '../Slider';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        id="mainNav"
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
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#section1">Section 1</a></li>
            <li className="nav-item"><a href="#section2">Section 2</a></li>
            <li className="nav-item"><a href="#section1">Section 3</a></li>
            <li className="nav-item"><a href="#section1">Section 4</a></li>
            <li className="nav-item"><a href="#section1">Section 5</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
}
