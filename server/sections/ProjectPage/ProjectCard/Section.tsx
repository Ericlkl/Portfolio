import React from 'react';

type SectionProps = {
  title: string;
};

import styles from '../../../styles/pages/ProjectPage/project_desc.module.scss';

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className={styles['project_desc_card_section']}>
      <h1 className={styles['project_desc_card_section_title']}>{title}</h1>
      {children}
    </div>
  );
};
export default Section;
