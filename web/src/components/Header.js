import React, { Component } from 'react';
import { Typography, Box, Container, Grid } from '@material-ui/core';

import profile_img from '../assets/img/profile_small.jpg';

export default class Header extends Component {
  state = {
    jobIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        jobIndex: this.state.jobIndex === 2 ? 0 : this.state.jobIndex + 1
      });
    }, 4000);
  }

  render() {
    const jobTitle = [
      <Typography variant='h4' className='se-text-animation'>
        A Software Engineer
      </Typography>,
      <Typography variant='h4' className='fullstack-text-animation'>
        A Full Stack Web Developer
      </Typography>,
      <Typography variant='h4' className='mobile-text-animation'>
        A Mobile App Developer
      </Typography>
    ];

    return (
      <Container>
        <Grid container justify='center' alignItems='center' className='header'>
          <Grid item xs={12} md={6}>
            <Typography variant='h2' className='header__description_greeting'>
              <Box fontWeight='fontWeightBold'>Hi, I'm Eric.</Box>
            </Typography>

            {jobTitle[this.state.jobIndex]}
            <Typography variant='h4'>
              from Brisbane , AU. I create websites that help businesses address
              their problem.{' '}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} className='header__profile'>
            <img src={profile_img} alt='eric_profile' />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
