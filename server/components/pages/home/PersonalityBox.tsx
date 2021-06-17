// styles
import styles from 'styles/pages/home/personality.module.scss';
// interfaces
import { PersonalityBoxProps } from 'interfaces/components/pages/home'


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

export default PersonalityBox;
