import React from 'react';
import { Fab } from '@material-ui/core';
import ProgrammingIcon from '../../components/ProgrammingIcon';

// `https://magora-systems.com/uploads/ReRGf0pfKf-L6G0KW4gpr3bEbx3viF5p.jpeg`
const imgURL = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;
const musicSchoolimg = `https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;
const calImg = `https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;
const geoAppImg = `https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;
const movieImg = `https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;
const collegeImg = `https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`;

type ProjectCardProps = {
  title: string;
  bg_url: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, bg_url }) => {
  return (
    <div className={`project_card`}>
      <div className='project_card_inner'>
        <div
          style={{
            backgroundImage:
              'linear-gradient(rgba(22, 22, 22, 0.4), rgba(22, 22, 22, 0.4)), url(' +
              bg_url +
              ')'
          }}
          className='project_card_inner_front'
        >
          <div className='project_card_inner_front_left'>
            <h3 className='project_card_inner_front_left_title'>{title}</h3>

            <div className='project_card_inner_front_left_stack'>
              <p className='project_card_inner_front_left_stack_lbl'>React</p>
              <p className='project_card_inner_front_left_stack_lbl'>React</p>
              <p className='project_card_inner_front_left_stack_lbl'>React</p>
              <p className='project_card_inner_front_left_stack_lbl'>React</p>
              <p className='project_card_inner_front_left_stack_lbl'>React</p>
            </div>
          </div>
          <div className='project_card_inner_front_right'>
            <ProgrammingIcon
              className='project_card_inner_front_right_logo'
              name='react'
              color
            />
          </div>
          {/* End of Card Front */}
        </div>

        <div className='project_card_inner_back'>
          <div className='project_card_inner_back_desc'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
              vero quidem ratione blanditiis dolorem rem repudiandae illum,
              nesciunt labore nemo iste, doloribus quaerat temporibus at ea cum
              dolorum debitis earum.
            </p>
          </div>
          <div>
            <Fab
              style={{ margin: 'auto' }}
              variant='extended'
              color='primary'
              aria-label='add'
            >
              View Project
            </Fab>
          </div>
        </div>

        {/* End of Card inner */}
      </div>
    </div>
  );
};

type Projects = {
  title: string;
};

const Projects: React.FC<Projects> = () => {
  return (
    <section className='projects'>
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
    </section>
  );
};

export default Projects;
