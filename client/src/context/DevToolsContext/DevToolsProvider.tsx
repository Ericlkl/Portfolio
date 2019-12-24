import React, { useReducer } from 'react';
import DevToolsContext, { initialState } from './DevToolsContext';
import DevToolsReducer from './DevToolsReducer';
import { DevToolsAction } from '../action';

const DevToolsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(DevToolsReducer, initialState);

  const setSelector = (toolName: string) =>
    dispatch({
      type: DevToolsAction.SET_SELECTOR,
      payload: toolName
    });

  const clearSelector = () =>
    dispatch({
      type: DevToolsAction.CLEAR_SELECTOR
    });

  return (
    <DevToolsContext.Provider
      value={{
        active: state.active,
        setSelector,
        clearSelector
      }}
    >
      {children}
    </DevToolsContext.Provider>
  );
};

export default DevToolsProvider;
