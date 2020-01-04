import React from 'react';
import _ from 'lodash';
import { Project } from '../../../types';

type PlatformBoxProps = {
  name: string;
};

const PlatformBox: React.FC<PlatformBoxProps> = ({ name }) => {
  const getIconName = (name: string) => {
    switch (_.lowerCase(name).trim()) {
      case 'website':
        return 'fas fa-globe-asia';
      case 'android':
        return 'fab fa-android';
      case 'ios':
        return 'fab fa-app-store-ios';
      case 'desktop':
        return 'fas fa-desktop';
    }
  };

  const iconName = getIconName(name);

  return (
    <div className='project_desc_card_header_right_platforms'>
      <div className='project_desc_card_header_right_platforms_platform'>
        <i className={iconName} /> {name}
      </div>
    </div>
  );
};

type HeaderProps = {
  project: Project;
};

const Header: React.FC<HeaderProps> = ({ project }) => {
  const { logo, name, desc, repo, docker, download, platforms } = project;
  return (
    <div className='project_desc_card_header'>
      <div className='project_desc_card_header_left'>
        <img
          className='project_desc_card_header_left_logo'
          src={logo}
          alt='Project Logo'
        />
      </div>
      <div className='project_desc_card_header_right'>
        <h1 className='project_desc_card_header_right_title'>{name}</h1>
        <h3 className='project_desc_card_header_right_subtitle'>{desc}</h3>

        <div className='project_desc_card_header_right_platforms'>
          {platforms.map(platform => (
            <PlatformBox key={platform} name={platform} />
          ))}
        </div>
        {repo && (
          <a href={repo} className='project_desc_card_header_right_links'>
            <i className='fab fa-fw fa-github-square' />
            {repo}
          </a>
        )}
        {docker && (
          <a href={docker} className='project_desc_card_header_right_links'>
            <i className='fab fa-fw fa-docker' />
            {docker}
          </a>
        )}

        {download &&
          download.map(link => (
            <a
              key={link}
              className='project_desc_card_header_right_links'
              href={link}
            >
              <i className='fas fa-fw fa-download' />
              {link}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Header;
