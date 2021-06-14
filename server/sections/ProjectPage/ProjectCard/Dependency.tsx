import Section from './Section';
import ProgrammingLogo from '../../../components/Common/DevToolIcon';

// interfaces
import { DevelopmentTool } from '../../../interfaces';

import styles from '../../../styles/pages/ProjectPage/project_desc.module.scss';

interface DependencyProps {
  devTools: DevelopmentTool[];
}

const Dependency: React.FC<DependencyProps> = ({ devTools }) => {
  const DevIcons = devTools.map((devTool) => (
    <div
      key={devTool.name}
      className={styles['project_desc_card_section_dependency_tech']}
    >
      <ProgrammingLogo toolName={devTool.name} />
      <p>{devTool.name}</p>
    </div>
  ));
  return (
    <Section title="Dependency">
      <div className={styles['project_desc_card_section_dependency']}>
        {DevIcons}
      </div>
    </Section>
  );
};

export default Dependency;
