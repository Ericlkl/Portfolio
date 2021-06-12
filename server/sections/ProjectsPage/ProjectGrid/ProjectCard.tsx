import { Fab } from '@material-ui/core';
import ProgrammingLogo from '../../../components/Programming/Logo';

// interfaces
import { ProjectCardProps } from '../interfaces';
// styles
import styles from '../../../styles/pages/projectsPage/projects.module.scss';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { _id, name, cover, intro, stacks, language } = project;

  const stacklbls = stacks.map((stack) => (
    <p key={stack} className="project_card_inner_front_left_stack_lbl">
      {stack}
    </p>
  ));

  const onViewProjectBtnClicked = () => {
    // Todo: Navigate user to next page
  };

  return (
    <div className={styles.project_card}>
      <div className={styles.project_card_inner}>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(66, 66, 66, 0.6), rgba(66, 66, 66, 0.6)), url(${cover}) `,
          }}
          className={styles.project_card_inner_front}
        >
          <div className={styles.project_card_inner_front_left}>
            <h3 className={styles.project_card_inner_front_left_title}>
              {name}
            </h3>

            <div className={styles.project_card_inner_front_left_stack}>
              {stacklbls}
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
