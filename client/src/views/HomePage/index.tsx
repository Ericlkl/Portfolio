import React, { Fragment, useEffect } from 'react';

// core components
import FeatureProject from './FeatureProject';

// Basic Layout component
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';

// Page Component
import Header from './Header';
import Services from './Services';
import Contact from './Contact';
import PersonalityGrid from './PersonalityGrid';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar logoColor='blue' />
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
