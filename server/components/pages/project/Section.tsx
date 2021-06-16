import styles from 'styles/pages/project/project_desc.module.scss';

// interfaces
import { SectionProps } from 'interfaces/components/pages/project'

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className={styles['project_desc_card_section']}>
      <h1 className={styles['project_desc_card_section_title']}>{title}</h1>
      {children}
    </div>
  );
};
export default Section;
