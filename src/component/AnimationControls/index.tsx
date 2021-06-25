import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { useAppState } from '../../state';
import playbackState from '../../state/playback';
import playbackSpeedState from '../../state/playbackSpeed';
import PlayPause from './PlayPause';
import PlaybackSpeed from './PlaybackSpeed';
import Slider from './Slider';


interface IAnimationControlsProps {
  frame: number;
  setFrame: (value: number) => void;
  totalFrames: number;
  incrementFrame: () => void;
  decrementFrame: () => void;
}

const AnimationControls: React.FC<IAnimationControlsProps> = (props) => {
  const { state: appState, dispatch } = useAppState();

  const handleTogglePlayback = () =>
    dispatch(playbackState.actions.togglePlayback());

  const handleChangeSpeed = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(playbackSpeedState.actions.setFps(
      parseInt(event.target.value, 10)
    ));

  const handleSetFrame = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.setFrame(
      parseInt(event.target.value, 10)
    );

  return (
    <div>
      <div>
        <Slider
          playback={appState.playback}
          currentFrame={props.frame}
          handleSetFrame={handleSetFrame}
          totalFrames={props.totalFrames} />
      </div>
      <div>
        <PlaybackSpeed
          playbackSpeed={appState.playbackSpeed}
          handleChangeSpeed={handleChangeSpeed} />
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
    </div>
  );
}
export default AnimationControls;
