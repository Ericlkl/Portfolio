import { createContext } from 'react';

export type DevToolState = {
  filter: string | undefined;
  setSelector: (toolName: string) => void;
  clearSelector: () => void;
};

export const initialState: DevToolState = {
  filter: undefined,
  setSelector: toolName => {},
  clearSelector: () => {}
};

const DevToolsContext = createContext(initialState);

export default DevToolsContext;
