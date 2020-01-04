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
  const { current, fetchProject, cleanCurrentProject } = useContext(
    ProjectsContext
  );

  const { isloading, project } = current;

  // Read ID from Route params
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isloading) fetchProject(id);
    return () => {
      cleanCurrentProject();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar logoColor='teal' />
      <Jumbotron
        title='Projects'
        subtitle='All Projects are made with heart'
        backgroundIMG={ProjectBG}
      />
      {isloading && <Spinner />}
      {project && <ProjectCard project={project} />}
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
