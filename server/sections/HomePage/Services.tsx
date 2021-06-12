import React from 'react';

import styles from '../../styles/pages/HomePage/services.module.scss';
const services = [
  {
    icon: 'fa-laptop',
    name: 'Web Development',
    features: 'Responsive and Interactive',
    desc: `Every website I built work across all devices no matter large or small, and it is extremely fast and interactive.`,
    skills: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript ES6+',
      'React',
      'React Context',
      'Redux',
      'Semantic UI',
      'Bootstrap 4',
      'Axios',
    ],
  },
  {
    icon: 'fa-server',
    name: 'Server Apps Development',
    features: 'Robust and Scalable',
    desc: `Managing the interchange of data between the server and the users, optimization of the server for maximum speed and scalability.`,
    skills: [
      'NodeJS',
      'ExpressJS',
      'Redis',
      'JsonWebToken',
      'MongoDB',
      'Mongoose',
      'MySQL',
      'Sequalize',
      'AWS',
      'Docker',
    ],
  },
  {
    icon: 'fa-mobile-alt',
    name: 'Mobile Apps Development',
    features: 'User Friendly and Compatible',
    desc: `Every mobile application I built works perfectly on Andriod / IOS, and they are easy to use without learning.`,
    skills: [
      'C#',
      'Xamarin Forms',
      'Xamarin Forms Essential',
      'Xamarin Forms Google Map',
      'SQLite',
    ],
  },
];

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
      <i className={`${styles.services_content_cards_icons} fas ${icon}`} />
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
