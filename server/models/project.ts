import { Project, ProjectIncludes } from './interfaces';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const initialInclude: ProjectIncludes = {
	devTools: true,
	platforms: true,
	screenshots: true,
};

export class ProjectManager {
	static async getProjects(rules = {}, include = initialInclude): Promise<Project[]> {
		const projects = await prisma.project.findMany({
			where: rules,
			include,
		});
		return projects;
	}

	static async getProject(rules = {}, include = initialInclude): Promise<Project | null> {
		const project = await prisma.project.findFirst({
			where: rules,
			include,
		});
		return project;
	}
}
