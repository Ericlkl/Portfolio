import React from 'react';
import { Project } from '../../../types';
type HeaderProps = {
  project: Project;
};

const Header: React.FC<HeaderProps> = ({ project }) => {
  const { logo, name, desc, repo, docker } = project;
  return (
    <div className='project_desc_card_header'>
      <div className='project_desc_card_header_left'>
        <img
          className='project_desc_card_header_left_logo'
          src={logo}
          alt='project_logo'
        />
      </div>
      <div className='project_desc_card_header_right'>
        <h1 className='project_desc_card_header_right_title'>{name}</h1>
        <h3 className='project_desc_card_header_right_subtitle'>{desc}</h3>
        <div className='project_desc_card_header_right_platforms'>
          <div className='project_desc_card_header_right_platforms_platform'>
            <i className='fas fa-globe-asia' /> Website
          </div>
        </div>
        <p className='project_desc_card_header_right_links'>
          <i className='fab fa-fw fa-github-square' /> {repo}
        </p>
        <p className='project_desc_card_header_right_links'>
          <i className='fab fa-fw fa-docker' /> {docker}
        </p>
        <p className='project_desc_card_header_right_links'>
          <i className='fas fa-fw fa-desktop' /> Http://
        </p>
      </div>
    </div>
  );
};

export default Header;
