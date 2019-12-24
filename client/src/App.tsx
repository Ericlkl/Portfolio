import React, { Fragment } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import './assets/scss/index.scss';

// pages for this product

import HomePage from './views/HomePage/HomePage';
import ProjectsPage from './views/ProjectsPage/ProjectsPage';
import AboutPage from './views/AboutPage/AboutPage';
import ContactPage from './views/ContactPage/ContactPage';
import ProjectDescriptionPage from './views/ProjectDescriptionPage/ProjectDescriptionPage';
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
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/projects/:id' component={ProjectDescriptionPage} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;