import React from 'react';
import { Project } from '../../../interfaces';
import DownloadBtn from '../../../components/Layout/DownloadBtn';

interface PlatformBoxProps {
  name: string;
}

const getIconName = (name: string) => {
  // Todo: lowercase and trim
  switch (name) {
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

import styles from '../../../styles/pages/ProjectPage/project_desc.module.scss';

const PlatformBox: React.FC<PlatformBoxProps> = ({ name }) => {
  const iconName = getIconName(name);

  return (
    <div className={styles['project_desc_card_header_right_platforms']}>
      <div
        className={styles['project_desc_card_header_right_platforms_platform']}
      >
        <i aria-hidden="true" className={iconName} /> {name}
      </div>
    </div>
  );
};

interface HeaderProps {
  project: Project;
}

const Header: React.FC<HeaderProps> = ({ project }) => {
  const {
    logo,
    name,
    description,
    repo,
    dockerHubUrl,
    downloadUrl,
    platforms,
  } = project;

  const Platforms = platforms?.map((platform) => (
    <PlatformBox key={platform.name} name={platform.name} />
  ));

  const DockerButton = dockerHubUrl ? (
    <a
      href={dockerHubUrl}
      className={styles['project_desc_card_header_right_links']}
    >
      <i className="fab fa-fw fa-docker" />
      {dockerHubUrl}
    </a>
  ) : null;

  return (
    <div className={styles['project_desc_card_header']}>
      <div className={styles['project_desc_card_header_left']}>
        <img
          className={styles['project_desc_card_header_left_logo']}
          src={logo}
          alt="Project Logo"
        />
      </div>
      <div className={styles['project_desc_card_header_right']}>
        <h1 className={styles['project_desc_card_header_right_title']}>
          {name}
        </h1>
        <h3 className={styles['project_desc_card_header_right_subtitle']}>
          {description}
        </h3>

        <div className={styles['project_desc_card_header_right_platforms']}>
          {Platforms}
        </div>
        <div className={styles['project_desc_card_header_right_links']}>
          <DownloadBtn platform="github" link={repo} text="View Code" />
          {/* {download?.ios && (
            <DownloadBtn platform="ios" link={download?.ios} text="Download" />
          )}

          {download?.android && (
            <DownloadBtn
              platform="android"
              link={download?.android}
              text="Download"
            />
          )}

          {download?.website && (
            <DownloadBtn
              platform="website"
              link={download?.website}
              text="Browse Site"
            />
          )} */}
        </div>
        {DockerButton}
      </div>
    </div>
  );
};

export default Header;
