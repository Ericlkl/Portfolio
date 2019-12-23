import React, { useState, useEffect } from 'react';
import { Typography, Box, Container, Grid } from '@material-ui/core';
import Typed from 'react-typed';

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
    'A Software Engineer',
    'A Full Stack Web Developer',
    'A Mobile App Developer'
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
          <Grid item xs={12} md={6} className='header__profile'>
            <img src={profile_img} alt='eric_profile' />
          </Grid>

          <Grid item xs={12} md={6}>
            <h2 className='header_greeting'>
              <Box fontWeight='fontWeightBold'>Hi, I'm Eric.</Box>
              <Box fontWeight='fontWeightBold'>
                <Typed strings={jobTitle} typeSpeed={65} backSpeed={65} loop />
              </Box>
            </h2>

            {/* {jobTitle[jobIndex]} */}
            <Typography variant='h5'>
              I create applications that solve customer's problem , and I love
              what I do.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Hero;
