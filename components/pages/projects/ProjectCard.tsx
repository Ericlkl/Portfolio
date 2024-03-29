// Components
import { Fab } from '@material-ui/core';
import Router from 'next/router';
import ProgrammingLogo from 'components/common/DevToolIcon';

// interfaces
import { ProjectCardProps } from 'interfaces/components/pages/projects';
// styles
import styles from 'styles/pages/projects/projects.module.scss';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, name, coverUrl, intro, devTools, language } = project;

  const devToolLabels = devTools?.slice(0, 8).map((devTool) => {
    return (
      <p
        key={devTool.name}
        className={styles['project_card_inner_front_left_stack_lbl']}
      >
        {devTool.name}
      </p>
    );
  });

  const onViewProjectBtnClicked = () => {
    // Todo: Navigate user to next page
    Router.push(`/projects/${id}`);
  };

  return (
    <div className={styles.project_card}>
      <div className={styles.project_card_inner}>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(66, 66, 66, 0.6), rgba(66, 66, 66, 0.6)), url(${coverUrl}) `,
          }}
          className={styles.project_card_inner_front}
        >
          <div className={styles.project_card_inner_front_left}>
            <h3 className={styles.project_card_inner_front_left_title}>
              {name}
            </h3>

            <div className={styles.project_card_inner_front_left_stack}>
              {devToolLabels}
            </div>
          </div>
          <div className={styles.project_card_inner_front_right}>
            <ProgrammingLogo
              className={styles.project_card_inner_front_right_logo}
              toolName={language}
            />
          </div>
          {/* End of Card Front */}
        </div>

        <div className={styles.project_card_inner_back}>
          <div className={styles.project_card_inner_back_desc}>
            {/* Fix truncate */}
            {/* <p>{_.truncate(intro, { length: 150 })}</p> */}
            <p>{intro}</p>
          </div>
          <div>
            <Fab
              onClick={onViewProjectBtnClicked}
              style={{ margin: 'auto' }}
              variant="extended"
              color="primary"
              aria-label="add"
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

export default ProjectCard;
