import React, { useContext } from 'react';
import ProjectCard from './ProjectCard';
// Types
import { ProjectGridProps } from '../interfaces';
import DevToolsContext from '../../../../context/DevToolsContext/DevToolsContext';
// const calImg = `https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;

import styles from '../../../../styles/pages/projects/projects.module.scss';
const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const { filter } = useContext(DevToolsContext);

  const projectCards = projects
    .filter((project) => {
      if (filter)
        return project.devTools.map((devTool) => devTool.name).includes(filter);
      else return true;
    })
    .map((project) => <ProjectCard key={project.name} project={project} />);

  return (
    <section className={styles.projects}>
      <div className={styles.projects_showcase}>{projectCards}</div>
    </section>
  );
};

export default ProjectGrid;
