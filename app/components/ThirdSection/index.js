import React, { Component } from 'react';
import './ThirdSection.scss';
import { Switch, Link, Route } from 'react-router-dom';
import Footer from '../Footer/index';
import PageA from '../PageA/index';
import PageB from '../PageB/index';

export default class ThirdSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          title: 'Footer',
          key: 'footer',
          link: '/',
          component: Footer,
        },
        {
          title: 'PageA',
          key: 'page-a',
          link: '/page-a',
          component: PageA,
        },
        {
          title: 'PageB',
          key: 'page-b',
          link: '/page-b',
          component: PageB,
        },
      ],
    };
  }

  renderMenuItems() {
    const { state } = this;
    const { routes } = state;

    return routes.map(route => (
      <Link to={route.link} key={route.key}>
        <div className="menu-item">{route.title}</div>
      </Link>
    ));
  }

  renderRoutes() {
    const { state } = this;
    const { routes } = state;

    return routes.map(route => {
      const routeKey = `${route.key} ${route.title}`;
      return (
        <Route
          exact
          key={routeKey}
          path={route.link}
          component={route.component}
        />
      );
    });
  }

  render() {
    return (
      <div className="ThirdSection">
        <div className="container h-100">
          <div className="row h-100 text-center">
            <h2 className="col-sm-12">Third Section Header</h2>
            <div className="layout">
              <div className="nav-menu">{this.renderMenuItems()}</div>
              <div className="page-container">
                <Switch>{this.renderRoutes()}</Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
