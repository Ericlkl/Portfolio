import React, { useContext } from 'react';
import _ from 'lodash';

import DevToolsContext from '../../context/DevToolsContext/DevToolsContext';
import CancelBtn from '../../components/Layout/CancelBtn';
import ProgrammingIcon from '../../components/ProgrammingIcon';

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
      <div key={toolName} className={className}>
        {_.isEqual(active, toolName) && (
          <CancelBtn
            className='devtools_bar_btn_cancel'
            onBtnClick={clearSelector}
          />
        )}

        <ProgrammingIcon
          color
          onIconClick={() => setSelector(toolName)}
          name={toolName}
        />

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
