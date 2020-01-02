import _ from 'lodash';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ProjectsContext from '../../../context/ProjectsContext/ProjectsContext';
import { Fab } from '@material-ui/core';
import ProgrammingIcon from '../../../components/ProgrammingIcon';

import { Project } from '../../../types';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { _id, name, cover, intro, stacks, language } = project;

  const history = useHistory();
  const { setCurrentProject } = useContext(ProjectsContext);

  const stacklbls = stacks.map(stack => (
    <p key={stack} className='project_card_inner_front_left_stack_lbl'>
      {stack}
    </p>
  ));

  const onViewProjectBtnClicked = () => {
    // Set The selected item to view on next page
    setCurrentProject(project);
    // Navigate user to next page
    history.push(`/projects/${_id}`);
  };

  return (
    <div className={`project_card`}>
      <div className='project_card_inner'>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(66, 66, 66, 0.6), rgba(66, 66, 66, 0.6)), url(${cover}) `
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
            <p>{_.truncate(intro, { length: 150 })}</p>
          </div>
          <div>
            <Fab
              onClick={onViewProjectBtnClicked}
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
