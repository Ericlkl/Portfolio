import React from 'react';

// Assests
import HeroBG from '../../assets/img/project_hero.jpg';

// Public Components
import Navbar from '../../components/Layout/Navbar';
import Hero from '../../components/Layout/Hero';
import Projects from '../../components/Layout/Projects';
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
      <Hero img={HeroBG} title='My Projects' subtitle='' />
      <DevToolsBar devTools={devTools} />

      <Projects title='My Projects'></Projects>
      <Footer />
    </DevToolsProvider>
  );
};

export default ProfilePage;
