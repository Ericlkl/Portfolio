export interface MetaTag {
	name?: string;
	content?: string;
	property?: string;
	dataReactHelmet: boolean;
}

export interface LinkTag {
	rel: string;
	href: string;
	dataReactHelmet: boolean;
}

export interface PageHeadProps {
	title: string;
	showDefaultTitle?: boolean;
	linkTags?: LinkTag[];
	metaTags?: MetaTag[];
}
