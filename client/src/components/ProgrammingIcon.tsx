import React from 'react';
import _ from 'lodash';

const getDeviconName = (toolName: string) => {
  switch (_.trim(toolName).toLowerCase()) {
    case 'ios':
      return 'devicon-apple-original';
    case 'aws':
      return 'devicon-amazonwebservices-original';
    case 'vs code':
      return 'devicon-visualstudio-plain';
    case 'bootstrap':
      return 'devicon-bootstrap-plain';
    case 'android':
      return 'devicon-android-plain';
    case 'c#':
      return 'devicon-csharp-plain';
    case 'csharp':
      return 'devicon-csharp-plain';
    case 'css':
      return 'devicon-css3-plain';
    case 'd3js':
    case 'd3':
      return 'devicon-d3js-plain';
    case 'docker':
      return 'devicon-docker-plain';
    case 'git':
      return 'devicon-git-plain';
    case 'github':
      return 'devicon-github-plain';
    case 'html':
      return 'devicon-html5-plain';
    case 'heroku':
      return 'devicon-heroku-original';
    case 'javascript':
      return 'devicon-javascript-plain';
    case 'mocha':
      return 'devicon-mocha-plain';
    case 'mongodb':
      return 'devicon-mongodb-plain';
    case 'mysql':
      return 'devicon-mysql-plain';
    case 'nginx':
      return 'devicon-nginx-original';
    case 'nodejs':
      return 'devicon-nodejs-plain';
    case 'python':
      return 'devicon-python-plain';
    case 'react':
      return 'devicon-react-original';
    case 'redis':
      return 'devicon-redis-plain';
    case 'scss':
      return 'devicon-sass-original';
    case 'sequelize':
      return 'devicon-sequelize-plain';
    case 'typescript':
      return 'devicon-typescript-plain';
    case 'vuejs':
      return 'devicon-vuejs-plain';
    case 'webpack':
      return 'devicon-webpack-plain';
    default:
      return '';
  }
};

type ProgrammingIconProps = {
  name: string;
  color: boolean;
  onIconClick?: () => void;
  className?: string;
};

const ProgrammingIcon: React.FC<ProgrammingIconProps> = ({
  name,
  color,
  onIconClick,
  className
}) => {
  // Params
  // 1 : Get Devicon Icon Name to fetch the icon
  // 2 : Add extra class name to icon if exist
  // 3 : colorize the icon if need
  const cN = `${getDeviconName(name)} ${className} ${color && 'colored'}`;

  return <i onClick={onIconClick} className={cN} />;
};

export default ProgrammingIcon;
