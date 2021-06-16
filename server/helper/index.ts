import { readdirSync } from 'fs';

function getDirectories(source) {
	return readdirSync(source, { withFileTypes: true })
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name);
}

export function getDevToolIconPath(name: string) {
	const iconName = name.toLowerCase();
	return `icons/${iconName}/${iconName}-original.svg`;
}
