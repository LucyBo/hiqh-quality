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
          title: 'Lucky Number',
          key: 'page-b',
          link: '/page-b',
          component: PageB,
        },
        {
          title: 'Another Lucky number',
          key: 'page-c',
          link: '/page-c',
          component: PageC,
        },
        {
          title: 'Lights Out',
          key: 'lights-out',
          link: '/lights-out',
          component: PageE,
        },
        {
          title: 'Todo List',
          key: 'todo-list',
          link: '/todo-list',
          component: PageF,
        },
        {
          title: 'Yahtzee',
          key: 'Yahtzee',
          link: '/yahtzee',
          component: PageG,
        },
        {
          title: "Dad's jokes app",
          key: 'jokes',
          link: '/jokes',
          component: PageH,
        }
      ],
    };
  }

  renderMenuItems() {
    const { state } = this;
    const { routes } = state;

    return routes.map(route => (
      <Link to={route.link} key={route.key}>
        <div className="menu-item navbar-link">{route.title}</div>
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
            <h2 className="col-sm-12">Fun Zone</h2>
            <h3 className="col-sm-12 text-center">Click! link and note your todo or check if You are a winner!</h3>
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
