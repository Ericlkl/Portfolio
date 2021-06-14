import { AchievementBoxProps } from './interfaces';
import styles from '../../../styles/pages/AboutPage/profile.module.scss';
const AchievementBox: React.FC<AchievementBoxProps> = ({ title, items }) => {
  const Achievements = items.map((i) => (
    <div key={i.name} className={styles.profile_content_achievement_box_item}>
      <img src={i.organization} alt="Company logo" />
      <p>{i.name}</p>
    </div>
  ));
  return (
    <div className={styles.profile_content_achievement_box}>
      <h4 className={styles.profile_content_achievement_box_title}>{title}</h4>
      {Achievements}
    </div>
  );
};

export default AchievementBox;
