import React, { Fragment } from 'react';

// core components
import FeatureProject from './FeatureProject';
import Hero from './Hero';
import Services from './Services';
import Projects from '../../components/Layout/Projects';
import Footer from '../../components/Layout/Footer';

const HomePage = ({ ...rest }) => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <FeatureProject />
      <Projects title='My Recent Work' />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
