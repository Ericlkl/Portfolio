import React from 'react';

// Specific component
import Header from './Header';
import Section from './Section';
import Screenshots from './Screenshots';
import Details from './Details';

// Type
import { Project } from '../../../types';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { screenshots, intro, information } = project;
  return (
    <section className='project_desc'>
      <div className='project_desc_card material_card'>
        <Header project={project} />
        <Section title='Introduction'>
          <p className='project_desc_card_section_description'>{intro}</p>
        </Section>

        <Section title='Preview'>
          <Screenshots screenshots={screenshots!} />
        </Section>

        <Section title='Information'>
          <Details information={information} />
        </Section>
      </div>
    </section>
  );
};

export default ProjectCard;
