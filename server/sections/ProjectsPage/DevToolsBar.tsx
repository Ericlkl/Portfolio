import { useContext } from 'react';
import DevToolsContext from '../../context/DevToolsContext/DevToolsContext';
import CancelBtn from '../../components/Layout/CancelBtn';
import ProgrammingLogo from '../../components/Programming/Logo';

// Interfaces
import { DevToolsBarProps } from './interfaces';
// styles
import styles from '../../styles/pages/projectsPage/devtoolsbar.module.scss';

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

        <ProgrammingLogo
          onLogoClick={() => setSelector(toolName)}
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
