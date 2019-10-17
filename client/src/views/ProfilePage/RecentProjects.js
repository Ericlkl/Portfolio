import React from 'react';
import { Fab, Grid } from '@material-ui/core';

const imgURL = `https://magora-systems.com/uploads/ReRGf0pfKf-L6G0KW4gpr3bEbx3viF5p.jpeg`;

const ProjectCard = () => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(33, 33, 33, 0.3), rgba(33, 33, 33, 0.3)), url(' +
          imgURL +
          ')'
      }}
      className='project_card'
    >
      <div className='project_card_content'>
        <h3 className='project_card_content_title bold'>Project Title</h3>
        <div className='project_card_content_stack'>Project Stack</div>
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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
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
