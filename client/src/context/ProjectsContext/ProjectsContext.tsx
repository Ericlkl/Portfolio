import { createContext } from 'react';
import { Project } from '../../types';

export const initialState: {
  current: Project | undefined;
  projects: Project[] | undefined;
  isloading: boolean;
  fetchProjects: () => void;
  fetchProject: (id: string) => void;
  setCurrentProject: (project: Project) => void;
  cleanCurrentProject: () => void;
} = {
  current: undefined,
  projects: undefined,
  isloading: true,
  fetchProjects: () => {},
  fetchProject: (id: string) => {},
  setCurrentProject: (project: Project) => {},
  cleanCurrentProject: () => {}
};

const ProjectsContext = createContext(initialState);

export default ProjectsContext;
