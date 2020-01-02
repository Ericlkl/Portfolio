import React from 'react';
import ProjectCard from './ProjectCard';
// Types
import { Project } from '../../../types';

// `https://magora-systems.com/uploads/ReRGf0pfKf-L6G0KW4gpr3bEbx3viF5p.jpeg`
const imgURL = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;
const musicSchoolimg = `https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;
const calImg = `https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;
const geoAppImg = `https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;
const movieImg = `https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;
const collegeImg = `https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;

type ProjectGridProps = {
  projects: Project[];
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const projectCards = projects.map(project => (
    <ProjectCard key={project.name} project={project} />
  ));

  return (
    <section className='projects'>
      <div className='projects_showcase'>{projectCards}</div>
    </section>
  );
};

export default ProjectGrid;
