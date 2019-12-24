import React, { Fragment } from 'react';

// core components
import Hero from '../../components/Layout/Hero';
import AboutBG from '../../assets/img/about_hero2.jpg';
import Footer from '../../components/Layout/Footer';

const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <Hero
        img={AboutBG}
        desc="I enjoy developing simple and beautiful application to solve complex problems. When I'm not coding, watching movies or reading books, you'll find me thinking, swimming or enjoying sunshine in Gold Coast."
        title='About Me'
        subtitle="I'm a software engineer based in Brisbane, Australia."
      ></Hero>
      <h1>Hello</h1>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
