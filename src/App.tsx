import React from 'react';
import {
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';

import Loading from './component/Loading';
import './style/App.css';
import animationState from './state/animation';
import loadingState from './state/loading';
import { FixTypeLater } from './type/misc';
import { fetchImagesFromManifest } from './util/images';


const rootReducer = combineReducers({
  loading: loadingState.reducer,
  animation: animationState.reducer,
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
      animation: {
        location: animation,
        frames: [],
      },
    },
  );

  React.useEffect(
    () => {
      if ( ! state.animation.location ) {
        return
      }

      fetchImagesFromManifest(state.animation.location).then(
        (blob) => {
          // eslint-disable-next-line
          dispatch(animationState.actions.setFrames([blob]));
          // eslint-disable-next-line
          dispatch(loadingState.actions.loaded());
        },
        (reason: string) => {
          console.log(`ERROR: Promise rejected because: ${reason}`);
        },
      );
    },
    [state.animation.location],
  );

  return (
    <div className="ros-animator-widget-container">
      {widgetContents(state)}
      {JSON.stringify(state)}
    </div>
  );
}

const widgetContents = (state: FixTypeLater) => {
  // eslint-disable-next-line
  if (state.loading) {
    return (
      <Loading />
    );
  } else {
    return (
      <div>Loaded!</div>
    );
  }
}

export default App;
