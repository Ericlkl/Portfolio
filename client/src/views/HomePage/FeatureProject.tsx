import React from 'react';
import { useHistory } from 'react-router-dom';
import { Fab, Paper } from '@material-ui/core';
import { Fade } from 'react-reveal';

const features = [
  {
    name: 'Interactive Web Application',
    icon: (
      <i className='feature_project_content_descbox_feature_icon fas fa-laptop-code' />
    )
  },
  {
    name: 'MERN Stack Development',
    icon: (
      <i className='feature_project_content_descbox_feature_icon fab fa-react' />
    )
  },
  {
    name: 'Data Visualization',
    icon: (
      <i className='feature_project_content_descbox_feature_icon fas fa-chart-area' />
    )
  },
  {
    name: 'Live Streaming',
    icon: (
      <i className='feature_project_content_descbox_feature_icon fas fa-satellite-dish' />
    )
  }
];

const ProjectDescription: React.FC = () => {
  const renderFeatures = features.map(feature => (
    <div key={feature.name} className='feature_project_content_descbox_feature'>
      {feature.icon}
      <p>{feature.name}</p>
    </div>
  ));

  const history = useHistory();

  const onViewBtnClick = () =>
    history.push('projects/5e0c13465ecc76a3f98b94f6');

  return (
    <Fade right>
      <div className='feature_project_content_descbox'>
        <h2 className='feature_project_content_descbox_title'>Tweetery</h2>

        <h3 className='feature_project_content_descbox_desc'>
          Tweetery is a Web Application that allows user compare tweets in a
          real time enviornment.
        </h3>
        {renderFeatures}
        <Fab
          onClick={onViewBtnClick}
          style={{ margin: '1.5rem auto' }}
          variant='extended'
          color='primary'
          aria-label='add'
        >
          View Project
        </Fab>
      </div>
    </Fade>
  );
};

const FeatureProject: React.FC = () => {
  return (
    <section className='feature_project'>
      <h3 className='section_title'>Feature Project</h3>
      <div className='feature_project_content container'>
        <Fade left>
          <Paper className='feature_project_content_imgbox'>
            <img
              className='feature_project_content_imgbox_img'
              src='https://i.imgur.com/hZCYEg1.png?1'
              alt='tweetery'
            />
          </Paper>
        </Fade>
        <ProjectDescription />
      </div>
    </section>
  );
};

export default FeatureProject;
