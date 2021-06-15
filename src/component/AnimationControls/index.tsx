import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { useAppState } from '../../state';
import playbackState from '../../state/playback';
import PlayPause from './PlayPause';


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
      <PlayPause handleTogglePlayback={handleTogglePlayback}
                 playback={appState.playback} />
      <button disabled={appState.playback === 'PLAYING'} 
              onClick={props.decrementFrame}>
        <FontAwesomeIcon icon={faStepBackward} />
      </button>
      <button disabled={appState.playback === 'PLAYING'} 
              onClick={props.incrementFrame}>
        <FontAwesomeIcon icon={faStepForward} />
      </button>
    </div>
  );
}
export default AnimationControls;
