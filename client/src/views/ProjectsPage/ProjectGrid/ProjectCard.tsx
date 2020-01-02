import React from 'react';
import { Fab } from '@material-ui/core';
import ProgrammingIcon from '../../../components/ProgrammingIcon';

import { Project } from '../../../types';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, cover, desc, stacks, language } = project;

  const stacklbls = stacks.map(stack => (
    <p key={stack} className='project_card_inner_front_left_stack_lbl'>
      {stack}
    </p>
  ));

  return (
    <div className={`project_card`}>
      <div className='project_card_inner'>
        <div
          style={{
            backgroundImage:
              'linear-gradient(rgba(22, 22, 22, 0.4), rgba(22, 22, 22, 0.4)), url(' +
              cover +
              ')'
          }}
          className='project_card_inner_front'
        >
          <div className='project_card_inner_front_left'>
            <h3 className='project_card_inner_front_left_title'>{name}</h3>

            <div className='project_card_inner_front_left_stack'>
              {stacklbls}
            </div>
          </div>
          <div className='project_card_inner_front_right'>
            <ProgrammingIcon
              className='project_card_inner_front_right_logo'
              name={language}
              color
            />
          </div>
          {/* End of Card Front */}
        </div>

        <div className='project_card_inner_back'>
          <div className='project_card_inner_back_desc'>
            <p>{desc}</p>
          </div>
          <div>
            <Fab
              style={{ margin: 'auto' }}
              variant='extended'
              color='primary'
              aria-label='add'
            >
              View Project
            </Fab>
          </div>
        </div>

        {/* End of Card inner */}
      </div>
    </div>
  );
};

export default ProjectCard;
