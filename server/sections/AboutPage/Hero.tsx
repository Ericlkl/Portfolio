import { HeroProps } from './interfaces';
import styles from '../../styles/Layout/hero.module.scss';
const Hero: React.FC<HeroProps> = ({
  img,
  title,
  subtitle,
  desc,
  children,
}) => {
  // Todo: Fix it to common component later
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <div className={styles.hero_content_description}>
          <h1 className={styles.hero_content_description_title}>{title}</h1>
          <p className={styles.hero_content_description_subtitle}>{subtitle}</p>
          <p className={styles.hero_content_description_desc}>{desc}</p>
        </div>

        <img className={styles.hero_content_img} src={img} alt="Me and My GF" />
      </div>
      {children}
    </div>
  );
};

export default Hero;
