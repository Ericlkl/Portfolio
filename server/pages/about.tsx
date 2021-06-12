import React, { Fragment, useEffect } from 'react';

// core components
import LayoutComponents from '../components/Layout';
import PageComponents from '../sections/AboutPage';
const { Navbar, Footer } = LayoutComponents;
const { Hero, MySkills, Profile, MyImages } = PageComponents;

const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <Navbar logoColor="grey" />
      <Hero
        img="https://i.imgur.com/njGf0mh.jpg?3"
        desc="I enjoy developing simple and beautiful application to solve complex problems. When I'm not coding, watching movies or reading books, you'll find me thinking, swimming or enjoying sunshine in Gold Coast."
        title="About Me"
        subtitle="I'm a software engineer based in Brisbane, Australia."
      >
        <MyImages />
      </Hero>

      <Profile />

      <MySkills />
      <Footer />
    </Fragment>
  );
};

export default AboutPage;