import React, { Fragment } from 'react';

// core components
import FeatureProject from '../sections/HomePage/FeatureProject';

// Basic Layout component
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

// Page Component
import HomeComponents from '../sections/HomePage';
const { Header, Services, Contact, PersonalityGrid } = HomeComponents;

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Navbar logoColor="blue" />
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
