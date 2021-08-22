import { DevelopmentTool } from './devTools';

export interface Project extends ProjectOptionalProps {
	id: number;
	name: string;
	type: string;
	repo: string;
	logo: string;
	intro: string;
	language: string;
	coverUrl: string;
	description: string;
	dockerHubUrl: string;
	downloadUrl: string;
	tags: string;
}

export interface ProjectOptionalProps {
	devTools?: DevelopmentTool[];
	platforms?: Platform[];
	screenshots?: Screenshots[];
}

export interface ProjectIncludes {
	devTools?: boolean;
	platforms?: boolean;
	screenshots?: boolean;
}

export interface Platform {
	id: number;
	name: string;
}

export interface Screenshots {
	id: number;
	url: string;
}
