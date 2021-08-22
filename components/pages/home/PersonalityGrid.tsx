import PersonalityBox from './PersonalityBox';

// Interfaces
import { PersonalityGridProps } from 'interfaces/components/pages/home';
// styles
import styles from 'styles/pages/home/personality.module.scss';

const PersonalityGrid: React.FC<PersonalityGridProps> = ({ personalities }) => {
  const PersonalityBoxs = personalities.map((personality) => (
    <PersonalityBox key={personality.title} personality={personality} />
  ));
  return (
    <section className={styles.personality}>
      <h1 className="section_title">About Me</h1>
      <div className={`${styles.personality_grid} container`}>
        {PersonalityBoxs}
      </div>
    </section>
  );
};

export default PersonalityGrid;
