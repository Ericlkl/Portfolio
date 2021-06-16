import { DevelopmentTool } from 'interfaces/models/devTools';
import { Project } from 'interfaces/models/project';
export interface ProjectsPageProps {
  projects: Project[];
  devTools: DevelopmentTool[];
}
