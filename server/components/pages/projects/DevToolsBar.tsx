import { useContext } from 'react';

// Components
import CancelBtn from 'components/common/CancelBtn';
import DevToolIcon from 'components/common/DevToolIcon';
// Context
import DevToolsContext from 'context/DevToolsContext/DevToolsContext';

// Interfaces
import { DevToolsBarProps } from 'interfaces/components/pages/projects';
// Styles
import styles from 'styles/pages/projects/devtoolsbar.module.scss';

const DevToolsBar: React.FC<DevToolsBarProps> = ({ devTools }) => {
  const { filter, setSelector, clearSelector } = useContext(DevToolsContext);

  const renderDevToolBtns = devTools.map((toolName) => {
    const className =
      filter === toolName
        ? `${styles.devtools_bar_btn} ${styles.activate}`
        : `${styles.devtools_bar_btn} ${styles.deactivate}`;

    return (
      <div key={toolName} className={className}>
        {filter === toolName && (
          <CancelBtn
            className={styles.devtools_bar_btn_cancel}
            onBtnClick={clearSelector}
          />
        )}

        <DevToolIcon
          onIconClicked={() => setSelector(toolName)}
          toolName={toolName}
        />

        <h3
          onClick={() => setSelector(toolName)}
          className={styles.devtools_bar_btn_name}
        >
          {toolName}
        </h3>
      </div>
    );
  });

  return (
    <div className={styles.devtools}>
      <div className={styles.devtools_bar}>{renderDevToolBtns}</div>
    </div>
  );
};

export default DevToolsBar;
