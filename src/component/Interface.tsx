import React from 'react';

import Animation from './Animation';
import Failed from './Failed';
import Loading from './Loading';
import { useAppState } from '../state';
import animationState from '../state/animation';
import loadingState from '../state/loading';
import { FixTypeLater } from '../type/misc';
import { fetchImagesFromManifest } from '../util/images';


interface IInterfaceProps {
  // TODO: Should this be nullable?
  animationLocation: string | null;
}

const Interface: React.FC<IInterfaceProps> = (props) => {
  const { state: appState, dispatch } = useAppState();

  React.useEffect(
    () => {
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
    [appState.animation.location],
  );
  React.useEffect(
    () => {
      if ( ! props.animationLocation ) {
        console.error(
          'No data found in "data-animation" attribute: ' +
          (appState.animation.location as string)
        );
        dispatch(loadingState.actions.loaded());
        return;
      }
      dispatch(animationState.actions.setLocation(props.animationLocation));
    },
    [],
  );

  return widgetContents(appState);
}


/* eslint-disable */
const widgetContents = (state: FixTypeLater) => {
  if (state.loading) {
    return (
      <Loading />
    );
  } else if (state.animation.frames.length > 0) {
    return (
      <Animation
        frames={state.animation.frames}
        playbackInterval={100} />
    );
  } else {
    return (
      <Failed />
    );
  }
}
/* eslint-enable */

export default Interface;
