import React from 'react';

// Specific component
import Header from './Header';
import Section from './Section';

import Dependency from './Dependency';
import Screenshots from './Screenshots';
import Details from './Details';

// Type
import { Project } from '../../../types';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { screenshots, intro, information, stacks } = project;
  return (
    <section className='project_desc'>
      <div className='project_desc_card material_card'>
        <Header project={project} />
        <Section title='Introduction'>
          <p className='project_desc_card_section_description'>{intro}</p>
        </Section>

        <Dependency stacks={stacks} />
        <Screenshots screenshots={screenshots!} />

        <Details information={information} />
      </div>
    </section>
  );
};

export default ProjectCard;
