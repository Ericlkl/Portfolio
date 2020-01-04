import React from 'react';
import StackedBar from '../../components/Chart/StackedBar';
import ProgrammingIcon from '../../components/ProgrammingIcon';
import { Fade } from 'react-reveal';
import { skillChartKeys, skillChartData, skillBoxData } from './Data';

type SkillBoxProps = {
  fieldName: string;
  skills: string[];
};

const SkillBox: React.FC<SkillBoxProps> = ({ fieldName, skills }) => {
  const icons = skills.map(skill => (
    <div key={skill} className='mySkills_content_desc_skillbox_icons_icon'>
      <ProgrammingIcon name={skill} color />
      {skill}
    </div>
  ));

  return (
    <div className='mySkills_content_desc_skillbox'>
      <h3 className='mySkills_content_desc_skillbox_title'>{fieldName}</h3>
      <div className='mySkills_content_desc_skillbox_icons'>{icons}</div>
    </div>
  );
};

const MySkills: React.FC = () => {
  const renderSkillBoxs = () =>
    skillBoxData.map((boxData, i) => (
      <Fade key={boxData.fieldName} bottom delay={i * 500} duration={500}>
        <SkillBox fieldName={boxData.fieldName} skills={boxData.skills} />
      </Fade>
    ));
  return (
    <section className='mySkills'>
      <h1 className='section_title'>My Skills</h1>
      <div className='mySkills_content container'>
        <div className='mySkills_content_desc'>{renderSkillBoxs()}</div>
        <Fade bottom delay={skillBoxData.length * 500} duration={500}>
          <div className='mySkills_content_chart'>
            <StackedBar
              data={skillChartData}
              keys={skillChartKeys}
              xlabel='Fields'
              ylabel='Confidence'
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default MySkills;
