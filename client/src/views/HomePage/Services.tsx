import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Slide } from 'react-reveal';

const services = [
  {
    icon: 'fa-laptop',
    name: 'Web Development',
    features: 'Responsive and Interactive',
    desc: `Every website should be built with two primary goals: Firstly, 
    it needs to work across all devices. Secondly, it needs to be
    fast as possible.`,
    skills: [
      'HTML',
      'SCSS',
      'JavaScript ES6+',
      'React',
      'Redux',
      'Semantic UI',
      'Bootstrap 4',
      'Axios'
    ]
  },
  {
    icon: 'fa-server',
    name: 'Server Apps Development',
    features: 'Robust and Scalable',
    desc: `Every website should be built with two primary goals: Firstly, 
    it needs to work across all devices. Secondly, it needs to be
    fast as possible.`,
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
      'Docker'
    ]
  },
  {
    icon: 'fa-mobile-alt',
    name: 'Mobile Apps Development',
    features: 'MVC and User Friendly',
    desc: `Every website should be built with two primary goals: Firstly, 
    it needs to work across all devices. Secondly, it needs to be
    fast as possible.`,
    skills: [
      'C#',
      'Xamarin Forms',
      'Xamarin Forms Essential',
      'Xamarin Forms Google Map',
      'SQLite'
    ]
  }
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

  const renderSkills = () => skills.map(name => <p>{name}</p>);

  return (
    <Slide bottom>
      <div className='services_content_cards'>
        <i className={`services_content_cards_icons fas ${icon}`} />
        <h1 className='services_content_cards_title'>{name}</h1>
        <h2 className='services_content_cards_subtitle'>{features}</h2>
        <p className='services_content_cards_desc'> {desc} </p>

        <div className='services_content_cards_techbox'>
          <h3>Skills :</h3>
          {renderSkills()}
        </div>
      </div>
    </Slide>
  );
};

const Services: React.FC = () => {
  const renderServices = () =>
    services.map(service => <ServiceCard service={service} />);

  return (
    <section className='services'>
      <h3 className='section_title'>My Services</h3>
      <div className='services_content container'>{renderServices()}</div>
    </section>
  );
};

export default Services;
