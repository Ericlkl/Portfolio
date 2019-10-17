import React from 'react';
import { Fab, Grid, Paper } from '@material-ui/core';
// `https://magora-systems.com/uploads/ReRGf0pfKf-L6G0KW4gpr3bEbx3viF5p.jpeg`
const imgURL = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80`;
const musicSchoolimg = `https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60`;
const calImg = `https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80`;
const geoAppImg = `https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80`;
const movieImg = `https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60`;
const collegeImg = `https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60`;

const StackLabel = ({ name }) => {
  return <div className='stacklbl'>{name}</div>;
};

const ProjectCard = ({ title, bg_url }) => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(22, 22, 22, 0.5), rgba(22, 22, 22, 0.5)), url(' +
          bg_url +
          ')'
      }}
      className='project_card'
    >
      <div className='project_card_content'>
        <h3 className='project_card_content_title bold'>{title}</h3>
        <div className='project_card_content_stack'>
          <StackLabel name='react' />
          <StackLabel name='mongoDB' />
          <StackLabel name='Web app' />
        </div>
      </div>

      <div className='project_card_logo'>
        <i class='devicon-react-original' />
      </div>
    </div>
  );
};

const RecentProjects = () => {
  return (
    <section className='projects'>
      <h3 className='section_title'>My Recent Projects</h3>
      <div className='projects_showcase'>
        <ProjectCard title='Tweetery' bg_url={imgURL} />
        <ProjectCard title='Groundsman' bg_url={geoAppImg} />
        <ProjectCard title='Pineland Music School' bg_url={musicSchoolimg} />
        <ProjectCard title='Balance Calculator' bg_url={calImg} />
        <ProjectCard
          title='QUT Students Statistical Studies'
          bg_url={collegeImg}
        />
        <ProjectCard title='Movie.Info' bg_url={movieImg} />
      </div>

      <Grid style={{ margin: '1rem 0rem' }} container justify='center'>
        <Fab
          style={{ margin: 'auto' }}
          variant='extended'
          color='primary'
          aria-label='add'
        >
          See more projects
        </Fab>
      </Grid>
    </section>
  );
};

export default RecentProjects;
