import React from 'react';
import { Typography, Card, Grid, Container } from '@material-ui/core';
import WebIcon from '@material-ui/icons/Web';

const Services = () => {
  return (
    <section className='services'>
      <h3>My Services</h3>
      <Container>
        <Grid container spacing={3} justify='center' alignItems='center'>
          <Grid xs={12} md={4} item>
            <Card className='services_cards'>
              <i className='services_cards_icons fas fa-laptop'></i>
              <h3>Web Development</h3>
              <h4>Responsive / Interactive</h4>
              <p>
                Every website should be built with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>
            </Card>
          </Grid>
          <Grid xs={12} md={4} item>
            <Card className='services_cards'>
              <i className='services_cards_icons fas fa-server'></i>
              <h3>Server Apps Development</h3>
              <h4>Robust / Scalable </h4>
              <p>
                Every website should be built with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>
            </Card>
          </Grid>
          <Grid xs={12} md={4} item>
            <Card className='services_cards'>
              <i className='services_cards_icons fas fa-mobile-alt'></i>
              <h3>Mobile Apps Development</h3>
              <h4>Portable / User Friendly </h4>
              <p>
                Every website should be built with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
