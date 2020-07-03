import React, { Component } from "react";
import './Navbar.scss';
import 'bootstrap/js/src/collapse.js';
import {Route, Switch, NavLink} from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import menu from '../../images/open-menu.png';




export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg"
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
          <span className="navbar-toggler-icon"><img src={menu} className="img-fluid" alt="menu-open" /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li ><a className="nav-item" href="#section1">Section 1</a></li>
            <li ><a className="nav-item" href="#section2">Section 2</a></li>
            <li ><a className="nav-item" href="#section3">Section 3</a></li>
            <li ><a className="nav-item" href="#section1">Section 4</a></li>
            <li ><a className="nav-item" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
}
