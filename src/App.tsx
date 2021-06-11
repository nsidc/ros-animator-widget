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
      console.log(state.animation.location);
      if ( ! state.animation.location ) {
        console.log(
          'No animation provided in "data-animation" attribute: ' +
          (state.animation.location as string)
        );
        dispatch(loadingState.actions.loaded());
        return;
      }

      fetchImagesFromManifest(state.animation.location).then(
        (blob) => {
          dispatch(animationState.actions.setFrames([blob]));
        },
        (reason: string) => {
          console.log(`ERROR: Promise rejected because: ${reason}`);
        },
      ).finally(() => {
        dispatch(loadingState.actions.loaded());
      });
    },
    [state.animation.location],
  );

  return (
    <div className="ros-animator-widget-container">
      {widgetContents(state)}
    </div>
  );
}

/* eslint-disable */
const widgetContents = (state: FixTypeLater) => {
  if (state.loading) {
    return (
      <Loading />
    );
  } else if (state.animation.frames.length > 0) {
    const frameUrl = URL.createObjectURL(state.animation.frames[0]);
    return (
      <div>
        <img src={frameUrl} />
      </div>
    );
  } else {
    return (
      <div>Something is wrong!</div>
    );
  }
}
/* eslint-enable */

export default App;
