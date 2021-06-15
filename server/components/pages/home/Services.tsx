import React from 'react';

import styles from '../../../styles/pages/home/services.module.scss';

import { services } from '../../../config/pages';

type Service = {
  icon: string;
  name: string;
  features: string;
  desc: string;
  skills: string[];
};

type ServiceCardProps = {
  service: Service;
};

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

const Services: React.FC = () => {
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
