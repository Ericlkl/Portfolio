import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

import 'assets/scss/material-kit-pro-react.scss?v=1.8.0';
import 'assets/scss/index.scss';

// pages for this product

import HomePage from 'views/HomePage/HomePage.js';
import ProjectsPage from 'views/ProjectsPage/ProjectsPage';
import Navbar from 'components/Layout/Navbar';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/projects' component={ProjectsPage} />
      </Switch>
    </Fragment>
  </Router>,
  document.getElementById('root')
);
