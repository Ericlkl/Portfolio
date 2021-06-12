import React from 'react';
import _ from 'lodash';
import { Project } from '../../../types';
import DownloadBtn from '../../../components/Layout/DownloadBtn';

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

  console.log(download);
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
        <div className='project_desc_card_header_right_links'>
          <DownloadBtn platform='github' link={repo} text='View Code' />
          {download?.ios && (
            <DownloadBtn platform='ios' link={download?.ios} text='Download' />
          )}

          {download?.android && (
            <DownloadBtn
              platform='android'
              link={download?.android}
              text='Download'
            />
          )}

          {download?.website && (
            <DownloadBtn
              platform='website'
              link={download?.website}
              text='Browse Site'
            />
          )}
        </div>

        {docker && (
          <a href={docker} className='project_desc_card_header_right_links'>
            <i className='fab fa-fw fa-docker' />
            {docker}
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
