import React from 'react';
import { Card, CardContent, Grid, Container } from '@material-ui/core';
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

  const renderSkills = () => skills.map(name => <p className='py-1'>{name}</p>);

  return (
    <Slide bottom>
      <Card className='services_content_cards'>
        <i className={`services_content_cards_icons fas ${icon} py-1`} />
        <CardContent>
          <h2 className='services_content_cards_title py-1'>{name}</h2>
          <h3 className='services_content_cards_subtitle py-2'>{features}</h3>
          <p className='px-1'> {desc} </p>
        </CardContent>

        <div className='services_content_cards_techbox'>
          <h3 className='text_secondary bold py-2'> Skills :</h3>
          {renderSkills()}
        </div>
      </Card>
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
