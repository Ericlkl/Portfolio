import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import css files
import './assets/scss/index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// pages for this product

import HomePage from './views/HomePage';
import ProjectsPage from './views/ProjectsPage';
import AboutPage from './views/AboutPage';
import ProjectDescriptionPage from './views/ProjectDescriptionPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/projects' component={ProjectsPage} />
          <Route path='/projects/:id' component={ProjectDescriptionPage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
