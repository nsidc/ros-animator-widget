import React from 'react';

import { useAppState } from '../state';
import playbackState from '../state/playback';


interface IAnimationControlsProps {
  incrementFrame: () => void;
  decrementFrame: () => void;
}

const AnimationControls: React.FC<IAnimationControlsProps> = (props) => {
  const { state: appState, dispatch } = useAppState();

  const handleTogglePlayback = () =>
    dispatch(playbackState.actions.togglePlayback());

  return (
    <div>
      <button onClick={handleTogglePlayback}>
        {appState.playback === 'PAUSED' ? 'Play' : 'Pause'}
      </button>
      <button disabled={appState.playback === 'PLAYING'} 
              onClick={props.decrementFrame}>
        Previous
      </button>
      <button disabled={appState.playback === 'PLAYING'} 
              onClick={props.incrementFrame}>
        Next
      </button>
    </div>
  );
}
export default AnimationControls;
