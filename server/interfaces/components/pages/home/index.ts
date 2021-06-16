export interface Personality {
	icon: JSX.Element;
	title: string;
	description: JSX.Element;
}

export interface PersonalityBoxProps {
	personality: Personality;
}

export interface Service {
	icon: string;
	name: string;
	features: string;
	desc: string;
	skills: string[];
}

export interface ServiceCardProps {
	service: Service;
}
