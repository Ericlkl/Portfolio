import { DevelopmentField, DevelopmentTool } from './devTools';
import { Project, ProjectIncludes, ProjectOptionalProps, Platform, Screenshots } from './project';
import { NextRoute, NextRouteParams } from './nextjs';

interface ContactFormFields {
	name: string;
	email: string;
	content: string;
}

export {
	DevelopmentField,
	DevelopmentTool,
	ContactFormFields,
	Project,
	ProjectIncludes,
	ProjectOptionalProps,
	Platform,
	Screenshots,
	NextRoute,
	NextRouteParams,
};
