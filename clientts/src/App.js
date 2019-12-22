import React, { Fragment } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

import './assets/scss/index.scss';

// pages for this product

import HomePage from './views/HomePage/HomePage.js';
import ProjectsPage from './views/ProjectsPage/ProjectsPage';
import Navbar from './components/Layout/Navbar';

var hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
      <Fragment>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/projects' component={ProjectsPage} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
