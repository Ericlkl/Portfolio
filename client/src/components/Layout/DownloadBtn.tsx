import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import LanguageIcon from '@material-ui/icons/Language';

type DownloadBtnProps = {
  link: string;
  platform: string;
  text: string;
};

const DownloadBtn: React.FC<DownloadBtnProps> = ({ link, platform, text }) => {
  const displayIcon = () => {
    switch (platform) {
      case 'github':
        return <GitHubIcon />;
      case 'ios':
        return <AppleIcon />;
      case 'android':
        return <AndroidIcon />;
      case 'website':
        return <LanguageIcon />;
    }
  };

  return (
    <a className={`downloadBtn ${platform}`} href={link}>
      {displayIcon()}
      <p>{text}</p>
    </a>
  );
};

export default DownloadBtn;
