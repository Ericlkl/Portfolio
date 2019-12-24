import React, { useContext } from 'react';
import _ from 'lodash';

import DevToolsContext from '../../context/DevToolsContext/DevToolsContext';
import CancelBtn from '../../components/Layout/CancelBtn';

const getDevicon = (toolName: string) => {
  switch (_.trim(toolName)) {
    case 'bootstrap':
      return 'devicon-bootstrap-plain';
    case 'android':
      return 'devicon-android-plain';
    case 'C#':
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
    case 'sass':
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

type DevToolsBarProps = {
  devTools: string[];
};

const DevToolsBar: React.FC<DevToolsBarProps> = ({ devTools }) => {
  const { active, setSelector, clearSelector } = useContext(DevToolsContext);

  const renderDevToolBtns = devTools.map(toolName => {
    const className = _.isEqual(active, toolName)
      ? 'devtools_bar_btn activate'
      : 'devtools_bar_btn deactivate';

    return (
      <div className={className}>
        {_.isEqual(active, toolName) && (
          <CancelBtn
            className='devtools_bar_btn_cancel'
            onBtnClick={clearSelector}
          />
        )}

        <i
          onClick={() => setSelector(toolName)}
          className={`${getDevicon(toolName)} colored`}
        ></i>
        <h3
          onClick={() => setSelector(toolName)}
          className='devtools_bar_btn_name'
        >
          {toolName}
        </h3>
      </div>
    );
  });

  return (
    <div className='devtools'>
      <div className='devtools_bar'>{renderDevToolBtns}</div>
    </div>
  );
};

export default DevToolsBar;
