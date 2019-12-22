import React, { Fragment } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import './assets/scss/index.scss';

// pages for this product

import HomePage from './views/HomePage/HomePage';
import ProjectsPage from './views/ProjectsPage/ProjectsPage';
import Navbar from './components/Layout/Navbar';

var hist = createBrowserHistory();

const App: React.FC = () => {
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
