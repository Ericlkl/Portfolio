import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import css files
import './assets/scss/index.scss';

// pages for this product

import HomePage from './views/HomePage/HomePage';
import ProjectsPage from './views/ProjectsPage/ProjectsPage';
import AboutPage from './views/AboutPage/AboutPage';
import ProjectDescriptionPage from './views/ProjectDescriptionPage/ProjectDescriptionPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/projects/:id' component={ProjectDescriptionPage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
