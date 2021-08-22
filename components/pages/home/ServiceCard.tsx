import styles from 'styles/pages/home/services.module.scss';

// interfaces
import { ServiceCardProps } from 'interfaces/components/pages/home'

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { name, icon, features, desc, skills } = service;

  const renderSkills = () => skills.map((name) => <p key={name}>{name}</p>);

  return (
    <div className={styles.services_content_cards}>
      <i
        aria-hidden="true"
        className={`${styles.services_content_cards_icons} fas ${icon}`}
      />
      <h1 className={styles.services_content_cards_title}>{name}</h1>
      <h2 className={styles.services_content_cards_subtitle}>{features}</h2>
      <p className={styles.services_content_cards_desc}> {desc} </p>

      <div className={styles.services_content_cards_techbox}>
        <h3>Skills :</h3>
        {renderSkills()}
      </div>
    </div>
  );
};

export default ServiceCard;
