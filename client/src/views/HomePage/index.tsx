import React, { Fragment } from 'react';

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

const HomePage: React.FC = ({ ...rest }) => {
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
