import { Fab  } from '@material-ui/core';
import styles from 'styles/pages/home/feature_project.module.scss';

// Interfaces
import { FeatureProjectProps } from 'interfaces/components/pages/home';

const ProjectDescription: React.FC<FeatureProjectProps> = ({ projectInfo }) => {
  const Features = projectInfo.features.map((feature) => (
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
      <h2 className={styles.feature_project_content_descbox_title}>{projectInfo.name}</h2>

      <h3 className={styles.feature_project_content_descbox_desc}>
        {projectInfo.description}
      </h3>
      {Features}
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
export default ProjectDescription;
