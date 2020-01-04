import React from 'react';
import _ from 'lodash';

type LogoProps = {
  toolName: string;
  className?: string;
  onLogoClick?: () => void;
};

const getSvgPornIconName: (name: string) => string = name => {
  switch (_.trim(name).toLowerCase()) {
    case 'typescript':
      return 'typescript-icon';
    case 'html':
    case 'html5':
      return 'html-5';
    case 'node':
    case 'nodejs':
      return 'nodejs-icon';
    case 'css':
    case 'css3':
      return 'css-3';
    case 'scss':
      return 'node-sass';
    case 'c#':
      return 'c-sharp';
    case 'vs code':
      return 'visual-studio-code';
    case 'ios':
      return 'apple-app-store';
    case 'android':
      return 'android-icon';
    case 'github':
      return 'github-icon';
    case 'r':
      return 'r-lang';
    case 'docker':
      return 'docker-icon';
    default:
      return _.trim(name).toLowerCase();
  }
};

const Logo: React.FC<LogoProps> = ({ toolName, className, onLogoClick }) => {
  const iconName = getSvgPornIconName(toolName);

  return (
    <img
      onClick={onLogoClick}
      className={className}
      src={`https://cdn.svgporn.com/logos/${iconName}.svg`}
      alt='Programming Logo'
    />
  );
};

export default Logo;
