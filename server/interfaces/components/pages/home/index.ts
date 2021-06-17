export interface HeaderInfo {
	name: string;
	jobTitles: string[];
	highlight: string;
	avator: {
		url: string;
		alt: string;
	};
}
export interface HeaderProps {
	headerInfo: HeaderInfo;
}

export interface Personality {
	icon: JSX.Element;
	title: string;
	description: JSX.Element;
}

export interface PersonalityGridProps {
	personalities: Personality[];
}

export interface PersonalityBoxProps {
	personality: Personality;
}

export interface Feature {
	name: string;
	icon: JSX.Element;
}

export interface FeatureProjectInfo {
	name: string;
	description: string;
	imageUrl: string;
	projectId: number;
	features: Feature[];
}

export interface FeatureProjectProps {
	projectInfo: FeatureProjectInfo;
}

export interface Service {
	icon: string;
	name: string;
	features: string;
	desc: string;
	skills: string[];
}

export interface ServicesProps {
	services: Service[];
}

export interface ServiceCardProps {
	service: Service;
}
