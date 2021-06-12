import React from 'react';

import Section from './Section';
import ProgrammingLogo from '../../../components/Programming/Logo';

type DependancyProps = {
  stacks: string[];
};

const Dependency: React.FC<DependancyProps> = ({ stacks }) => {
  return (
    <Section title='Dependancy'>
      <div className='project_desc_card_section_dependency'>
        {stacks.map(toolname => (
          <div
            key={toolname}
            className='project_desc_card_section_dependency_tech'
          >
            <ProgrammingLogo toolName={toolname} />
            <p>{toolname}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Dependency;
