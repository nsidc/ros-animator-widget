import React from 'react';

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
        (images) => {
          dispatch(animationState.actions.setFrames(images));
        },
        (reason: string) => {
          console.error(`Promise rejected because: ${reason}`);
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

export default Interface;
