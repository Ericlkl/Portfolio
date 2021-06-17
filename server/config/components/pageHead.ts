// Interfaces
import { LinkTag, MetaTag, PageHeadProps } from 'interfaces/components/common/pageHead.interface';

const linkTags: LinkTag[] = [
	{ rel: 'canonical', href: 'https://kalonglee.com', dataReactHelmet: true },
];

const metaTags: MetaTag[] = [
	{ name: 'generator', content: 'KA LONG LEE on Next!', dataReactHelmet: true },
	{ name: 'twitter:site', content: '@ericlkl', dataReactHelmet: true },
	{ name: 'twitter:creator', content: '@ericlkl', dataReactHelmet: true },
	{ name: 'twitter:title', content: 'KA LONG LEE', dataReactHelmet: true },
	{ property: 'og:type', content: 'article', dataReactHelmet: true },
	{ property: 'og:title', content: 'KA LONG LEE', dataReactHelmet: true },
	{ property: 'og:site_name', content: 'KA LONG LEE', dataReactHelmet: true },
	{ property: 'og:image:width', content: '1200', dataReactHelmet: true },
	{ property: 'og:image:height', content: '630', dataReactHelmet: true },
	{ property: 'og:locale', content: 'en_US', dataReactHelmet: true },
	{ property: 'og:url', content: 'https://kalonglee.com', dataReactHelmet: true },
	{ property: 'og:description', content: '', dataReactHelmet: true },
	{ name: 'twitter:url', content: 'https://kalonglee.com', dataReactHelmet: true },
	{ name: 'twitter:description', content: '', dataReactHelmet: true },
];

export const defaultPageHeadConfig: PageHeadProps = {
	title: 'KA LONG LEE [Eric] - Full Stack Developer',
	linkTags,
	metaTags,
};
