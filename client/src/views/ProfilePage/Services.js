import React from 'react';
import { Typography, Card, Grid, Container } from '@material-ui/core';

const Services = () => {
  return (
    <section style={{ height: '90vh' }} className='services'>
      <h3>My Services</h3>
      <Container>
        <Grid container spacing={3} justify='center' alignItems='center'>
          <Grid xs={12} md={4} item>
            <Card style={{ height: '500px' }}>
              <h3>Front End</h3>
            </Card>
          </Grid>
          <Grid xs={12} md={4} item>
            <Card style={{ height: '500px' }}>
              <h3>Back End</h3>
            </Card>
          </Grid>
          <Grid xs={12} md={4} item>
            <Card style={{ height: '500px' }}>
              <h3>Mobile Apps</h3>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
