import { DevToolsAction } from '../action';
import { initialState, DevToolState } from './DevToolsContext';

type Action = {
  type: string;
  payload?: any;
};

export default (state: DevToolState, action: Action) => {
  switch (action.type) {
    case DevToolsAction.CLEAR_SELECTOR:
      return initialState;
    case DevToolsAction.SET_SELECTOR:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};
