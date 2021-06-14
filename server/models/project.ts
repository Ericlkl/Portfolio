import { Project, ProjectIncludes } from '../interfaces';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const initialInclude: ProjectIncludes = {
  devTools: true,
  platforms: true,
  screenshots: true,
};

export async function getProjects(
  rules = {},
  include = initialInclude
): Promise<Project[]> {
  const projects = await prisma.project.findMany({
    where: rules,
    include,
  });
  return projects;
}

export async function getProject(
  rules = {},
  include = initialInclude
): Promise<Project | null> {
  const project = await prisma.project.findFirst({
    where: rules,
    include,
  });
  return project;
}
