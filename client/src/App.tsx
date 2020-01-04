import React, { Fragment } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox'; // Import Simple React Lightbox
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import css files
import './assets/scss/index.scss';

// pages for this product

import HomePage from './views/HomePage';
import ProjectsPage from './views/ProjectsPage';
import AboutPage from './views/AboutPage';
import ProjectDescriptionPage from './views/ProjectDescriptionPage';
import ProjectsProvider from './context/ProjectsContext/ProjectsProvider';

const App: React.FC = () => {
  return (
    <ProjectsProvider>
      <BrowserRouter>
        <SimpleReactLightbox>
          <Fragment>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/about' component={AboutPage} />
              <Route exact path='/projects' component={ProjectsPage} />
              <Route path='/projects/:id' component={ProjectDescriptionPage} />
            </Switch>
          </Fragment>
        </SimpleReactLightbox>
      </BrowserRouter>
    </ProjectsProvider>
  );
};

export default App;
