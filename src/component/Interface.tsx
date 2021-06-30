import React from 'react';
import ReactTooltip from 'react-tooltip';

import Animation from './Animation';
import Failed from './Failed';
import Loading from './Loading';
import { useAppState } from '../state';
import animationState from '../state/animation';
import loadingState from '../state/loading';
import { useParams, ControlsOrientationValue } from '../state/params';
import { FixTypeLater } from '../type/misc';
import { fetchImagesFromManifest } from '../util/images';


const Interface: React.FC = (props) => {
  const { state: appState, dispatch } = useAppState();
  const { animationLocation, controlsOrientation, appId } = useParams();

  React.useEffect(
    () => {
      // TODO: use animationLocation param instead
      if ( ! appState.animation.location ) {
        return;
      }

      fetchImagesFromManifest(appState.animation.location).then(
        (images: string[]) => {
          dispatch(animationState.actions.setFrames(images));
        },
        (reason: string) => {
          console.error(`Failed to fetch images because: ${reason}`);
        },
      ).finally(() => {
        dispatch(loadingState.actions.loaded());
      });
    },
    [appState.animation.location, dispatch],
  );
  React.useEffect(
    () => {
      if ( ! animationLocation ) {
        console.error(
          'No data found in "data-animation" attribute: ' +
          (appState.animation.location as string)
        );
        dispatch(loadingState.actions.loaded());
        return;
      }
      dispatch(animationState.actions.setLocation(animationLocation));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return widgetContents(appState, controlsOrientation, appId);
}


/* eslint-disable */
const widgetContents = (
  state: FixTypeLater,
  controlsOrientation: ControlsOrientationValue,
  appId: string,
) => {
  if (state.loading) {
    return (
      <Loading />
    );
  } else if (state.animation.frames.length > 0) {
    return (
      <div className='animation-container'>
        <ReactTooltip id={appId} place={controlsOrientation} effect={'solid'} />
        <Animation
          frames={state.animation.frames}
          playback={state.playback}
          playbackFps={state.playbackSpeed} />
      </div>
    );
  } else {
    return (
      <Failed />
    );
  }
}
/* eslint-enable */

export default Interface;
