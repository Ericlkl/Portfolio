import React from 'react';
import ProjectCard from './ProjectCard';
// Types
import { Project } from '../../../types';

// const calImg = `https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;

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
