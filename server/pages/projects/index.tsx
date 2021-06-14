import { getProjects } from '../../models/project';
// Public Components
import LayoutComponents from '@/components/Layout';
const { BasicLayout, Spinner, Jumbotron } = LayoutComponents;

// Page Specific Components
import PageComponents from '@/sections/ProjectsPage';
const { DevToolsBar, ProjectGrid } = PageComponents;
// Provider
import DevToolsProvider from '@/context/DevToolsContext/DevToolsProvider';

// Configs
import configs from '@/config';
const { devToolsOptions } = configs;

import { Project } from '@/models';

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
}

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <DevToolsProvider>
      <BasicLayout>
        <Jumbotron
          title="Projects"
          subtitle="All Projects are made with heart"
          backgroundIMG="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        />
        <DevToolsBar devTools={devToolsOptions} />
        <ProjectGrid projects={projects} />
      </BasicLayout>
    </DevToolsProvider>
  );
};

export default ProjectsPage;
