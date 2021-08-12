import React from 'react';
import StackedBar from 'components/common/chart/StackedBar';
import ProgrammingLogo from 'components/common/DevToolIcon';
import { skillChartKeys, skillChartData, skillBoxData } from 'constants/pages';

// Styles
import styles from 'styles/pages/about/mySkills.module.scss';
// Props
import { SkillBoxProps } from 'interfaces/components/pages/about';

const SkillBox: React.FC<SkillBoxProps> = ({ fieldName, skills }) => {
  const icons = skills.map((skill) => (
    <div
      key={skill}
      className={styles['mySkills_content_desc_skillbox_icons_icon']}
    >
      <ProgrammingLogo toolName={skill} />
      {skill}
    </div>
  ));

  return (
    <div className={styles['mySkills_content_desc_skillbox']}>
      <h3 className={styles['mySkills_content_desc_skillbox_title']}>
        {fieldName}
      </h3>
      <div className={styles['mySkills_content_desc_skillbox_icons']}>
        {icons}
      </div>
    </div>
  );
};

const MySkills: React.FC = () => {
  const renderSkillBoxes = () =>
    skillBoxData.map((boxData, i) => (
      <SkillBox
        key={boxData.fieldName}
        fieldName={boxData.fieldName}
        skills={boxData.skills}
      />
    ));
  return (
    <section className={styles['mySkills']}>
      <h1 className="section_title">My Skills</h1>
      <div className={`${styles['mySkills_content']} container`}>
        <div className={styles['mySkills_content_desc']}>
          {renderSkillBoxes()}
        </div>
        <div className={styles['mySkills_content_chart']}>
          {/* <StackedBar
            data={skillChartData}
            keys={skillChartKeys}
            xlabel="Fields"
            ylabel="Confidence"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
