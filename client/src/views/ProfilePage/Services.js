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
    stack: ['HTML5', 'SCSS', 'JavaScript ES6+', 'React', 'Redux']
  },
  {
    icon: 'fa-server',
    name: 'Server Apps Development',
    features: 'Robust and Scalable',
    desc: `Every website should be built with two primary goals: Firstly, 
    it needs to work across all devices. Secondly, it needs to be
    fast as possible.`,
    stack: ['NodeJS', 'ExpressJS', 'MongoDB', 'MySQL', 'Redis', 'AWS', 'Docker']
  },
  {
    icon: 'fa-mobile-alt',
    name: 'Mobile Apps Development',
    features: 'MVC and User Friendly',
    desc: `Every website should be built with two primary goals: Firstly, 
    it needs to work across all devices. Secondly, it needs to be
    fast as possible.`,
    stack: ['C#', 'Xamarin Forms']
  }
];

const ServiceCard = ({ service }) => {
  const { name, icon, features, desc, stack } = service;
  return (
    <Grid xs={12} sm={6} md={4} item>
      <Card className='services_cards'>
        <i className={`services_cards_icons fas ${icon}`} />
        <CardContent>
          <h3 className='services_cards_title'>{name}</h3>
          <h4 className='services_cards_subtitle'>{features}</h4>
          <p> {desc} </p>
        </CardContent>

        <Grid container direction='column' justify='center' alignItems='center'>
          <h4 className='text_secondary bold'>Languages :</h4>
          {stack.map(techName => (
            <p>{techName}</p>
          ))}
        </Grid>
      </Card>
    </Grid>
  );
};

const Services = () => {
  const renderServices = () =>
    services.map(service => <ServiceCard service={service} />);

  return (
    <section className='services'>
      <h3 className='section_title'>My Jobs</h3>
      <Container>
        <Grid className='p-1' container spacing={3} justify='center'>
          {renderServices()}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
