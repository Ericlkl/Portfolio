import { ProjectsAction } from '../action';
import { Project } from '../../types';
type State = {
  current: Project | undefined;
  projects: Project[] | undefined;
  isloading: boolean;
};

type Action =
  | {
      type: ProjectsAction.FETCH_PROJECT | ProjectsAction.SET_CURRENT_PROJECT;
      payload: Project;
    }
  | {
      type: ProjectsAction.FETCH_PROJECTS;
      payload: Project[];
    }
  | {
      type: ProjectsAction.CLEAR_CURRENT_PROJECT;
    };

export default (state: State, action: Action) => {
  switch (action.type) {
    case ProjectsAction.FETCH_PROJECTS:
      return {
        ...state,
        isloading: false,
        projects: action.payload
      };
    case ProjectsAction.FETCH_PROJECT:
    case ProjectsAction.SET_CURRENT_PROJECT:
      return {
        ...state,
        isloading: false,
        current: action.payload
      };
    case ProjectsAction.CLEAR_CURRENT_PROJECT:
      return {
        ...state,
        isloading: true,
        current: undefined
      };
    default:
      return state;
  }
};
