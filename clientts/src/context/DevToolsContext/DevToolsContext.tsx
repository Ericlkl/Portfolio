import { createContext } from 'react';

export type DevToolState = {
  active: string;
  setSelector: (toolName: string) => void;
  clearSelector: () => void;
};

export const initialState: DevToolState = {
  active: '',
  setSelector: toolName => {},
  clearSelector: () => {}
};

const DevToolsContext = createContext(initialState);

export default DevToolsContext;
