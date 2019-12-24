import React, { Fragment } from 'react';

// core components
import Hero from '../../components/Layout/Hero';
import HeroBG from '../../assets/img/project_hero.jpg';
import Footer from '../../components/Layout/Footer';

const ProfilePage: React.FC = ({ ...rest }) => {
  return (
    <Fragment>
      <Hero img={HeroBG} title='My Projects' />
      Descrition
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
