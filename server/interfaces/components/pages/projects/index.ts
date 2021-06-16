import { Project } from 'interfaces/models/project';
export interface DevToolsBarProps {
	devTools: string[];
}

export interface ProjectGridProps {
	projects: Project[];
}

export interface ProjectCardProps {
	project: Project;
}
