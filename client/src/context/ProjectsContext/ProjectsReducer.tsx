import { ProjectsAction } from '../action';
import { Project } from '../../types';
type State = {
  current: {
    project: Project | undefined;
    isloading: boolean;
  };
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
      // Actions :
      // 1 : isloading -> false - Turn Off spinnerz
      // 2 : Projects -> res.data - Set values to server data
      return {
        ...state,
        isloading: false,
        projects: action.payload
      };
    case ProjectsAction.FETCH_PROJECT:
    case ProjectsAction.SET_CURRENT_PROJECT:
      // Actions :
      // 1 : isloading -> false - Dont need to fetch specific data from server
      // 2 : Project -> res.data / context data
      return {
        ...state,
        current: {
          project: action.payload,
          isloading: false
        }
      };
    case ProjectsAction.CLEAR_CURRENT_PROJECT:
      // Actions :
      // 1 : isloading -> true - So people enter to another page can fetch new data
      // 2 : project -> undefine - so the page will not show previous data
      return {
        ...state,
        current: {
          project: undefined,
          isloading: true
        }
      };
    default:
      return state;
  }
};
