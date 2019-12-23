import React, { Fragment } from 'react';

// core components
import FeatureProject from './FeatureProject';
import Header from './Header';
import Services from './Services';
import Projects from '../../components/Layout/Projects';
import Footer from '../../components/Layout/Footer';

const HomePage: React.FC = ({ ...rest }) => {
  return (
    <Fragment>
      <Header />
      <Services />
      <FeatureProject />
      <Projects title='My Recent Work' />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
