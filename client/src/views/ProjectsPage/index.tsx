import React, { useEffect, useContext } from 'react';
import ProjectsContext from '../../context/ProjectsContext/ProjectsContext';

// Assests
import ProjectBG from '../../assets/img/project_bg.jpg';

// Public Components
import Navbar from '../../components/Layout/Navbar';
import Spinner from '../../components/Layout/Spinner';
import Jumbotron from '../../components/Layout/Jumbotron';
import Footer from '../../components/Layout/Footer';

// Page Specific Compnents
import DevToolsBar from './DevToolsBar';
import ProjectGrid from './ProjectGrid';
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

const ProfilePage: React.FC = () => {
  const { isloading, projects, fetchProjects } = useContext(ProjectsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isloading) {
      fetchProjects();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <DevToolsProvider>
      <Navbar logoColor='teal' />
      <Jumbotron
        title='Projects'
        subtitle='All Projects are made with heart'
        backgroundIMG={ProjectBG}
      />
      <DevToolsBar devTools={devTools} />
      {isloading && <Spinner />}
      {projects && <ProjectGrid projects={projects} />}
      <Footer />
    </DevToolsProvider>
  );
};

export default ProfilePage;
