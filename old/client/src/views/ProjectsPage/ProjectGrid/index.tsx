import React, { useContext } from 'react';
import ProjectCard from './ProjectCard';
// Types
import { Project } from '../../../types';
import DevToolsContext from '../../../context/DevToolsContext/DevToolsContext';
// const calImg = `https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;

type ProjectGridProps = {
  projects: Project[];
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const { filter } = useContext(DevToolsContext);

  const projectCards = projects
    .filter(project => {
      if (filter) return project.stacks.includes(filter);
      else return true;
    })
    .map(project => <ProjectCard key={project.name} project={project} />);

  return (
    <section className='projects'>
      <div className='projects_showcase'>{projectCards}</div>
    </section>
  );
};

export default ProjectGrid;
