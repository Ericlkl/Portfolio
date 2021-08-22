export interface Image {
	url: string;
	description: string;
}

export interface GalleryProps {
	images: Image[]
}

export interface HeroProps {
	img: string;
	title: string;
	subtitle?: string;
	desc?: string;
}

export interface SkillsProps {
	skills: SkillBoxProps[]
}
export interface SkillBoxProps {
	fieldName: string;
	skills: string[];
}

export interface AchievementBoxProps {
	title: string;
	items: any[];
}
