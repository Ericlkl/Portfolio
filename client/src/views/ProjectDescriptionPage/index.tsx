import React, { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Public Components
import Navbar from '../../components/Layout/Navbar';
import Spinner from '../../components/Layout/Spinner';
import Jumbotron from '../../components/Layout/Jumbotron';
import Footer from '../../components/Layout/Footer';
// Specific Component
import ProjectCard from './ProjectCard';

// Assests
import ProjectBG from '../../assets/img/project_bg.jpg';

// Context
import ProjectsContext from '../../context/ProjectsContext/ProjectsContext';

type RouteParams = {
  id: string;
};

const ProfilePage: React.FC = () => {
  const { current, isloading, fetchProject, cleanCurrentProject } = useContext(
    ProjectsContext
  );

  // Read ID from Route params
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    if (isloading) fetchProject(id);
    return () => {
      cleanCurrentProject();
    };
    // eslint-disable-next-line
  }, [current]);

  return (
    <Fragment>
      <Navbar logoColor='teal' />
      <Jumbotron
        title='Projects'
        subtitle='All Projects are made with heart'
        backgroundIMG={ProjectBG}
      />
      {isloading && <Spinner />}
      {current && <ProjectCard project={current} />}
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
