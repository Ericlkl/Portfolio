// Components
import ServiceCard from './ServiceCard';
// interfaces
import { ServicesProps } from 'interfaces/components/pages/home'

// Styles
import styles from 'styles/pages/home/services.module.scss';

const Services: React.FC<ServicesProps> = ({ services }) => {
  const renderServices = () =>
    services.map((service) => (
      <ServiceCard key={service.name} service={service} />
    ));

  return (
    <section className={styles.services}>
      <h3 className="section_title">My Services</h3>
      <div className={`${styles.services_content} container`}>
        {renderServices()}
      </div>
    </section>
  );
};

export default Services;
