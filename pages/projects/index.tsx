// Database Manager
import { ProjectManager } from 'models/project';
import { DevelopmentToolManager } from 'models/devTool';
// Public Components
import { BasicLayout, Jumbotron, PageHead } from '../../components/common';

// Page Specific Components
import { DevToolsBar, ProjectGrid } from '../../components/pages/projects';
// Provider
import DevToolsProvider from 'context/DevToolsContext/DevToolsProvider';

// interface
import { ProjectsPageProps } from 'interfaces/controllers/projects';

export async function getStaticProps() {
  const projects = await ProjectManager.getProjects();
  const devTools = await DevelopmentToolManager.getDevelopmentTools({
    sortedByField: true,
  });
  return {
    props: {
      projects,
      devTools,
    },
    revalidate: 60 * 2,
  };
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects, devTools }) => {
  return (
    <DevToolsProvider>
      <BasicLayout>
      <PageHead title="Project Showcases "/>
        <Jumbotron
          title="Projects"
          subtitle="All Projects are made with heart"
          backgroundIMG="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        />
        <DevToolsBar devTools={devTools} />
        <ProjectGrid projects={projects} />
      </BasicLayout>
    </DevToolsProvider>
  );
};

export default ProjectsPage;
