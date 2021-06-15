import React from 'react';
import { Fab, Paper } from '@material-ui/core';
import styles from '../../../styles/pages/home/feature_project.module.scss';
const features = [
  {
    name: 'Interactive Web Application',
    icon: (
      <i
        aria-hidden="true"
        className="feature_project_content_descbox_feature_icon fas fa-laptop-code"
      />
    ),
  },
  {
    name: 'MERN Stack Development',
    icon: (
      <i
        aria-hidden="true"
        className="feature_project_content_descbox_feature_icon fab fa-react"
      />
    ),
  },
  {
    name: 'Data Visualization',
    icon: (
      <i
        aria-hidden="true"
        className="feature_project_content_descbox_feature_icon fas fa-chart-area"
      />
    ),
  },
  {
    name: 'Live Streaming',
    icon: (
      <i
        aria-hidden="true"
        className="feature_project_content_descbox_feature_icon fas fa-satellite-dish"
      />
    ),
  },
];

const ProjectDescription: React.FC = () => {
  const renderFeatures = features.map((feature) => (
    <div
      key={feature.name}
      className={styles.feature_project_content_descbox_feature}
    >
      {feature.icon}
      <p>{feature.name}</p>
    </div>
  ));

  const onViewBtnClick = () => {
    console.log('Clicked');
  };

  return (
    <div className={styles.feature_project_content_descbox}>
      <h2 className={styles.feature_project_content_descbox_title}>Tweetery</h2>

      <h3 className={styles.feature_project_content_descbox_desc}>
        Tweetery is a web application that visualize how people feels about
        celebrities / products / things by analyzing tweets related to the
        keyword user provided.
      </h3>
      {renderFeatures}
      <Fab
        onClick={onViewBtnClick}
        style={{ margin: '1.5rem auto' }}
        variant="extended"
        color="primary"
        aria-label="add"
      >
        View Project
      </Fab>
    </div>
  );
};

const FeatureProject: React.FC = () => {
  return (
    <section className={styles.feature_project}>
      <h3 className="section_title">Latest Project</h3>
      <div className={`${styles.feature_project_content} container`}>
        <Paper className={styles.feature_project_content_imgbox}>
          <img
            className={styles.feature_project_content_imgbox_img}
            src="https://i.imgur.com/hZCYEg1.png?1"
            alt="tweetery"
          />
        </Paper>
        <ProjectDescription />
      </div>
    </section>
  );
};

export default FeatureProject;
