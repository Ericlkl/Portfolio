import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Container
} from '@material-ui/core';

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

const ServiceCard = ({ service }) => {
  const { name, icon, features, desc, skills } = service;

  return (
    <Grid xs={12} sm={6} md={4} item>
      <Card className='services_cards'>
        <i className={`services_cards_icons fas ${icon}`} />
        <CardContent>
          <h3 className='services_cards_title'>{name}</h3>
          <h4 className='services_cards_subtitle'>{features}</h4>
          <p> {desc} </p>
        </CardContent>

        <div className='services_cards_techbox'>
          <h3 className='text_secondary bold'> Skills :</h3>
          {skills.map(name => (
            <p>{name}</p>
          ))}
        </div>
      </Card>
    </Grid>
  );
};

const Services = () => {
  const renderServices = () =>
    services.map(service => <ServiceCard service={service} />);

  return (
    <section className='services'>
      <h3 className='section_title'>My Services</h3>
      <Container>
        <Grid className='p-1' container spacing={3} justify='center'>
          {renderServices()}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
