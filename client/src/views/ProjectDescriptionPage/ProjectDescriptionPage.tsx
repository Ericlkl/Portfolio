import React, { Fragment } from 'react';

// core components
// Assests
import ProjectBG from '../../assets/img/project_bg.jpg';
// Public Components
import Navbar from '../../components/Layout/Navbar';
import Jumbotron from '../../components/Layout/Jumbotron';
import Footer from '../../components/Layout/Footer';

import ProjectCard from './ProjectCard';

const ProfilePage: React.FC = () => {
  return (
    <Fragment>
      <Navbar logoColor='teal' />
      <Jumbotron
        title='Projects'
        subtitle='All Projects are made with heart'
        backgroundIMG={ProjectBG}
      />

      <ProjectCard />

      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
