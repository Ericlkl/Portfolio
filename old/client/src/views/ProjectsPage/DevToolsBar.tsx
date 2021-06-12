import React, { useContext } from 'react';
import _ from 'lodash';

import DevToolsContext from '../../context/DevToolsContext/DevToolsContext';
import CancelBtn from '../../components/Layout/CancelBtn';
import ProgrammingLogo from '../../components/Programming/Logo';

type DevToolsBarProps = {
  devTools: string[];
};

const DevToolsBar: React.FC<DevToolsBarProps> = ({ devTools }) => {
  const { filter, setSelector, clearSelector } = useContext(DevToolsContext);

  const renderDevToolBtns = devTools.map(toolName => {
    const className = _.isEqual(filter, toolName)
      ? 'devtools_bar_btn activate'
      : 'devtools_bar_btn deactivate';

    return (
      <div key={toolName} className={className}>
        {_.isEqual(filter, toolName) && (
          <CancelBtn
            className='devtools_bar_btn_cancel'
            onBtnClick={clearSelector}
          />
        )}

        <ProgrammingLogo
          onLogoClick={() => setSelector(toolName)}
          toolName={toolName}
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
