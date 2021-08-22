// Components
import { Paper } from '@material-ui/core';
import ProjectDescription from './ProjectDescription';

// Interfaces
import { FeatureProjectProps } from 'interfaces/components/pages/home';
// Styles
import styles from 'styles/pages/home/feature_project.module.scss';


const FeatureProject: React.FC<FeatureProjectProps> = ({ projectInfo }) => {
  return (
    <section className={styles.feature_project}>
      <h3 className="section_title">Latest Project</h3>
      <div className={`${styles.feature_project_content} container`}>
        <Paper className={styles.feature_project_content_imgbox}>
          <img
            className={styles.feature_project_content_imgbox_img}
            src={projectInfo.imageUrl}
            alt={projectInfo.name}
          />
        </Paper>
        <ProjectDescription projectInfo={projectInfo} />
      </div>
    </section>
  );
};

export default FeatureProject;
