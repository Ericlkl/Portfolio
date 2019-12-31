import React from 'react';

// Assests
import ProjectBG from '../../assets/img/project_bg.jpg';

// Public Components
import Navbar from '../../components/Layout/Navbar';
import Jumbotron from '../../components/Layout/Jumbotron';

import Projects from './Projects';
import Footer from '../../components/Layout/Footer';

// Page Specific Compnents
import DevToolsBar from './DevToolsBar';

// Provider
import DevToolsProvider from '../../context/DevToolsContext/DevToolsProvider';

const devTools = [
  'html',
  'css',
  'javaScript',
  'typeScript',
  'react',
  'vuejs',
  'scss',
  'nodejs',
  'mysql',
  'mongodb',
  'sequelize',
  'redis',
  'c#',
  'python'
];

const ProfilePage: React.FC = ({ ...rest }) => {
  return (
    <DevToolsProvider>
      <Navbar logoColor='teal' />
      <Jumbotron title='Projects' subtitle='All Projects are made with heart' backgroundIMG={ProjectBG} />
      <DevToolsBar devTools={devTools} />

      <Projects title='My Projects'></Projects>
      <Footer />
    </DevToolsProvider>
  );
};

export default ProfilePage;
