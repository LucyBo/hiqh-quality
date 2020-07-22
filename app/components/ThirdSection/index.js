import React, { Component } from 'react';
import './ThirdSection.scss';
import { Switch, Link, Route } from 'react-router-dom';
import PageA from '../PageA/index';
import PageB from '../PageB/index';
import PageC from '../PageC/index';
import PageD from '../PageD/index';
import PageE from '../PageE/index';
import PageF from '../PageF/index';
import PageG from '../PageG/index';
import PageH from '../PageH/index';
import PageI from '../PageI/index';

export default class ThirdSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
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
        {
          title: 'PageC',
          key: 'page-c',
          link: '/page-c',
          component: PageC,
        },
        {
          title: 'PageD',
          key: 'page-d',
          link: '/page-d',
          component: PageD,
        },
        {
          title: 'PageE',
          key: 'page-e',
          link: '/page-e',
          component: PageE,
        },
        {
          title: 'PageF',
          key: 'page-f',
          link: '/page-f',
          component: PageF,
        },
        {
          title: 'PageG',
          key: 'page-g',
          link: '/page-g',
          component: PageG,
        }
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
      <div className="ThirdSection" id="section3">
          <div className="row h-100 text-center">
            <h2 className="col-sm-12">Third Section Header</h2>
            <div className="container h-100">
              <div className="nav-menu h-100">{this.renderMenuItems()}</div>
            </div>
              <div className="page-container container h-100">
                <Switch>{this.renderRoutes()}</Switch>
              </div>
            </div>
          </div>
       
    );
  }
}
