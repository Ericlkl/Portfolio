import React from 'react';

import Header from './Header';
import Section from './Section';
import Screenshots from './Screenshots';
import Details from './Details';

const ProjectCard: React.FC = () => {
  return (
    <section className='project_desc'>
      <div className='project_desc_card material_card'>
        <Header />
        <Section title='Introduction'>
          <p className='project_desc_card_section_description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea et in
            molestias a corporis vel laboriosam officiis deserunt nostrum
            molestiae tenetur, nobis necessitatibus praesentium, voluptatibus
            dolore fugiat sit laborum ducimus.
          </p>
        </Section>

        <Section title='Preview'>
          <Screenshots />
        </Section>

        <Section title='Information'>
          <Details />
        </Section>
      </div>
    </section>
  );
};

export default ProjectCard;
