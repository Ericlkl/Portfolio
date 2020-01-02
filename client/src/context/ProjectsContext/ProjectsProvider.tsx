import React, { useReducer } from 'react';
import axios from 'axios';
import ProjectsContext, { initialState } from './ProjectsContext';
import ProjectsReducer from './ProjectsReducer';
import { ProjectsAction } from '../action';
import { Project } from '../../types';

const ProjectsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ProjectsReducer, initialState);

  const fetchProjects = async () => {
    const res = await axios.get('/api/projects/');
    console.log('Fetch Projects !');
    console.log(res.data);
    dispatch({
      type: ProjectsAction.FETCH_PROJECTS,
      payload: res.data
    });
  };
  const fetchProject = async (id: string) => {
    const res = await axios.get(`/api/projects/${id}`);
    console.log(res.data);
    dispatch({
      type: ProjectsAction.FETCH_PROJECT,
      payload: res.data
    });
  };
  const setCurrentProject = (project: Project) =>
    dispatch({
      type: ProjectsAction.SET_CURRENT_PROJECT,
      payload: project
    });

  const cleanCurrentProject = () =>
    dispatch({ type: ProjectsAction.CLEAR_CURRENT_PROJECT });

  return (
    <ProjectsContext.Provider
      value={{
        current: state.current,
        projects: state.projects,
        isloading: state.isloading,
        fetchProjects,
        fetchProject,
        setCurrentProject,
        cleanCurrentProject
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
