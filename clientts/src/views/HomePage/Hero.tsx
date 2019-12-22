import React, { useState, useEffect } from 'react';
import { Typography, Box, Container, Grid } from '@material-ui/core';

import profile_img from '../../assets/img/profile_small.jpg';

const Hero: React.FC = () => {
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (jobIndex === 2) setJobIndex(0);
      else setJobIndex(jobIndex + 1);
    }, 4000);

    return () => {};
    //eslint-disable-next-line
  }, [jobIndex]);

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
    <header className='header'>
      <Container>
        <Grid
          style={{ height: '90vh' }}
          container
          justify='center'
          alignItems='center'
        >
          <Grid item xs={12} md={6}>
            <Typography variant='h2' className='header_greeting'>
              <Box fontWeight='fontWeightBold'>Hi, I'm Eric.</Box>
            </Typography>

            {jobTitle[jobIndex]}
            <Typography variant='h5'>
              from Brisbane. I create applications that solve customer's problem
              , and I love what I do.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} className='header__profile'>
            <img src={profile_img} alt='eric_profile' />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Hero;
