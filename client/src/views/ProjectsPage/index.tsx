import React, { useEffect, useContext } from 'react';
import _ from 'lodash';
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

let devTools: string[] = [];

const ProfilePage: React.FC = () => {
  const { isloading, projects, fetchProjects } = useContext(ProjectsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isloading) {
      fetchProjects();
    }
    // eslint-disable-next-line
  }, []);

  projects?.forEach(project => {
    devTools = _.uniq([...devTools, ...project.stacks]);
  });

  return (
    <DevToolsProvider>
      <Navbar logoColor='teal' />
      <Jumbotron
        title='Projects'
        subtitle='All Projects are made with heart'
        backgroundIMG={ProjectBG}
      />
      <DevToolsBar devTools={_.orderBy(devTools, [], ['asc'])} />
      {isloading && <Spinner />}
      {projects && <ProjectGrid projects={projects} />}
      <Footer />
    </DevToolsProvider>
  );
};

export default ProfilePage;
