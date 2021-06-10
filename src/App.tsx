import React from 'react';
import {
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';

import './style/App.css';
import loadingState from './state/loading';

const rootReducer = combineReducers({
  loading: loadingState.reducer,
});
type RootReducerType = ReturnType<typeof rootReducer>;


interface IAppProps {
  domElement: Element;
}

const App: React.FC<IAppProps> = (props) => {
  const animation = props.domElement.getAttribute('data-animation')
  const [state, dispatch] = React.useReducer<Reducer<RootReducerType>>(
    rootReducer,
    // TODO: dedup initial state -- it's defined in the "createSlice" call too...
    {
      loading: true,
    },
  );

  React.useEffect(() => {
    if ( state.loading ) {
      setTimeout(() => dispatch(loadingState.actions.loaded()), 5000);
    }
  });

  return (
    <div className="ros-animator-widget-container">
      <span>Content: {animation}</span>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
}

export default App;
