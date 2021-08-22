// Library
import { ProjectManager } from 'models/project';
// Public Components
import { BasicLayout, Jumbotron, PageHead } from '../../components/common';

// Page Specific Components
import ProjectCard from 'components/pages/project';

// Model
import { NextRoute } from 'models/next';

// interface
import { Project as IProject } from 'interfaces/models/project';
import { ProjectPageProps } from 'interfaces/controllers/project';

export async function getStaticPaths() {
  const projects: IProject[] = await ProjectManager.getProjects();
  const paths = projects.map(
    (project) => new NextRoute({ id: String(project.id) })
  );
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(props) {
  const { id } = props.params;
  try {
    const project = await ProjectManager.getProject({ id: Number(id) });

    if (!project) {
      return {
        redirect: {
          destination: '/projects',
        },
      };
    }

    return {
      props: {
        project,
      },
      revalidate: 60 * 2,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <BasicLayout>
      <PageHead title={`Project - ${project.name}`} />
      <Jumbotron
        title="Projects"
        subtitle="All Projects are made with heart"
        backgroundIMG="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      />
      <ProjectCard project={project} />
    </BasicLayout>
  );
};

export default ProjectPage;
