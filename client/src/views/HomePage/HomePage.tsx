import React, { Fragment } from 'react';

// core components
import FeatureProject from './FeatureProject';
import Header from './Header';
import Services from './Services';
import Contact from './Contact';
import Footer from '../../components/Layout/Footer';
import PersonalityGrid from './PersonalityGrid';

const HomePage: React.FC = ({ ...rest }) => {
  return (
    <Fragment>
      <Header />
      <PersonalityGrid />
      <Services />
      <FeatureProject />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
