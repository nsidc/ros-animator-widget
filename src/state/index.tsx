import React from 'react';
import { combineReducers, Reducer } from '@reduxjs/toolkit';

import animationState, {
  initialState as animationInitialState,
} from './animation';
import loadingState, {
  initialState as loadingInitialState
} from './loading';


const initialState = {
  loading: loadingInitialState,
  animation: animationInitialState,
};

const rootReducer = combineReducers({
  loading: loadingState.reducer,
  animation: animationState.reducer,
});
type RootReducerType = ReturnType<typeof rootReducer>;

interface IContext {
  state: typeof initialState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: React.Dispatch<any>;
}
const AppContext = React.createContext<IContext>(
  {
    state: initialState,
    dispatch: () => undefined,
  }
);

// import this, then `<StateProvider><App /></StateProvider>` to provide
// context to App.
export const StateProvider: React.FC = ( { children } ) => {
  const [state, dispatch] = React.useReducer<Reducer<RootReducerType>>(
    rootReducer,
    initialState,
  );
  // TODO: Are there performance concerns with this?
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppState = (): IContext =>
  React.useContext(AppContext);
