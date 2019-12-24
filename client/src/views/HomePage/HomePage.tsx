import React, { Fragment } from 'react';

// core components
import FeatureProject from './FeatureProject';
import Header from './Header';
import Services from './Services';
import Projects from '../../components/Layout/Projects';
import Footer from '../../components/Layout/Footer';
import PersonalityGrid from './PersonalityGrid';

const HomePage: React.FC = ({ ...rest }) => {
  return (
    <Fragment>
      <Header />
      <PersonalityGrid />
      <Services />
      <FeatureProject />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
