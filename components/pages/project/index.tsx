// Components
import Header from './Header';
import Section from './Section';
import Dependency from './Dependency';
import Screenshots from './Screenshots';
// import Details from './Details';

// interfaces
import { ProjectCardProps } from 'interfaces/components/pages/project'

import styles from 'styles/pages/project/project_desc.module.scss';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { screenshots, intro, devTools } = project;
  return (
    <section className={styles['project_desc']}>
      <div className={styles['project_desc_card'] + ' ' + 'material_card'}>
        <Header project={project} />
        <Section title="Introduction">
          <p className={styles['project_desc_card_section_description']}>
            {intro}
          </p>
        </Section>

        <Dependency devTools={devTools!} />
        <Screenshots screenshots={screenshots!} />

        {/* <Details information={information} /> */}
      </div>
    </section>
  );
};

export default ProjectCard;
