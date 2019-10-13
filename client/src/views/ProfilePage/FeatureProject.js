import React from 'react';
import { Grid, Container, Fab, Icon } from '@material-ui/core';
import tweetery_img from 'assets/img/tweetery_UI.jpg';
import WebIcon from '@material-ui/icons/Web';
import StorageIcon from '@material-ui/icons/Storage';

const features = [
  {
    name: 'Interactive Web Application',
    icon: <WebIcon fontSize='large' />
  },
  {
    name: 'MERN Stack Development',
    icon: <i className='fab fa-react fa-2x'></i>
  },
  {
    name: 'AWS Hosting | Load Balancing',
    icon: <StorageIcon fontSize='large' />
  }
];

const ProjectFeatures = ({ feature }) => {
  const { icon, name } = feature;
  return (
    <Grid item>
      <Grid container alignItems='center' spacing={1}>
        <Grid item>{icon}</Grid>
        <Grid item>
          <h4>{name}</h4>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ProjectDescription = () => {
  const renderFeatures = () =>
    features.map(feature => <ProjectFeatures feature={feature} />);

  return (
    <Grid xs={12} md={4} item>
      <Grid
        className='feature_project_description'
        style={{ height: '100%' }}
        container
        direction='column'
      >
        <h2 className='bold text-primary '>Tweetery</h2>

        <h3>
          Tweetery is a Web Application that allows user compare tweets in a
          real time enviornment.
        </h3>
        {renderFeatures()}
        <Fab
          style={{ margin: '1.5rem auto' }}
          variant='extended'
          color='primary'
          aria-label='add'
        >
          View Project
        </Fab>
      </Grid>
    </Grid>
  );
};

const FeatureProject = () => {
  return (
    <section className='feature_project'>
      <h3 className='section_title'>Feature Project</h3>
      <Container>
        <Grid
          style={{ margin: '2rem 0' }}
          container
          justify='center'
          alignItems='center'
          spacing={2}
        >
          <Grid xs={12} md={8} item>
            <div className='feature_project_imgbox'>
              <img
                className='feature_project_imgbox_img'
                src={tweetery_img}
                alt='tweetery'
              />
            </div>
          </Grid>

          <ProjectDescription />
        </Grid>
      </Container>
    </section>
  );
};

export default FeatureProject;
