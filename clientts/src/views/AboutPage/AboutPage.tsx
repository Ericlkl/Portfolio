import React, { Fragment } from 'react';

// core components
import Hero from '../../components/Layout/Hero';
import AboutBG from '../../assets/img/about_hero2.jpg';
import Footer from '../../components/Layout/Footer';

const AboutPage: React.FC = ({ ...rest }) => {
  return (
    <Fragment>
      <Hero img={AboutBG} title='About Me' />
      <h1>Hello</h1>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
