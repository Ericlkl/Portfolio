import { DevelopmentTool } from 'interfaces/models/devTools';
import { Project } from 'interfaces/models/project';
export interface DevToolsBarProps {
  devTools: DevelopmentTool[];
}

export interface ProjectGridProps {
  projects: Project[];
}

export interface ProjectCardProps {
  project: Project;
}
