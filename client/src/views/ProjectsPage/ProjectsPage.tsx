import React from 'react';

// Assests
import HeroBG from '../../assets/img/project_hero.jpg';

// Public Components
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
  'javascript',
  'typescript',
  'react',
  'vuejs',
  'sass',
  'nodejs',
  'mysql',
  'mongodb',
  'sequelize',
  'redis',
  'csharp',
  'python'
];

const ProfilePage: React.FC = ({ ...rest }) => {
  return (
    <DevToolsProvider>
      <Hero img={HeroBG} title='My Projects' />
      <DevToolsBar devTools={devTools} />

      <Projects title='My Projects'></Projects>
      <Footer />
    </DevToolsProvider>
  );
};

export default ProfilePage;
