import React from 'react';

// styles
import styles from '../../../styles/pages/home/personality.module.scss';

import { personalities } from '../../../config/pages';

type Personality = {
  icon: JSX.Element;
  title: string;
  description: JSX.Element;
};

type PersonalityBoxProps = {
  personality: Personality;
};

const PersonalityBox: React.FC<PersonalityBoxProps> = ({ personality }) => {
  const { icon, title, description } = personality;
  return (
    <div className={styles.personality_grid_box}>
      <div className={styles.personality_grid_box_hexagon}>{icon}</div>

      <h2 className={styles.personality_grid_box_title}>{title}</h2>
      {description}
    </div>
  );
};

const PersonalityGrid: React.FC = () => {
  const personalityBoxs = personalities.map((persona) => (
    <PersonalityBox key={persona.title} personality={persona} />
  ));
  return (
    <section className={styles.personality}>
      <h1 className="section_title">About Me</h1>
      <div className={`${styles.personality_grid} container`}>
        {personalityBoxs}
      </div>
    </section>
  );
};

export default PersonalityGrid;
