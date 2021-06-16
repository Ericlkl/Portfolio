// interfaces
import { Project, Screenshots } from 'interfaces/models/project';
import { DevelopmentTool } from 'interfaces/models/devTools';

export interface DependencyProps {
	devTools: DevelopmentTool[];
}

export interface DetailProps {
	name: string;
	value: string;
}

export interface DetailsProps {
	information: object;
}

export interface PlatformBoxProps {
	name: string;
}

export interface ProjectCardProps {
	project: Project;
}

export interface ScreenshotProps {
	screenshot: Screenshots;
}

export interface ScreenshotsProps {
	screenshots: Screenshots[];
}

export interface SectionProps {
	title: string;
}

export interface HeaderProps {
	project: Project;
}
