// Components
import { DownloadBtn } from 'components/common';
import PlatformBox from './Platformbox';
// interfaces
import { Project } from 'interfaces/models/project';
import { HeaderProps, PlatformBoxProps } from 'interfaces/components/pages/project'

// Styles
import styles from 'styles/pages/project/project_desc.module.scss';

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
