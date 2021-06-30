import React from 'react';

import { useAppState } from '../../state';
import playbackState from '../../state/playback';
import playbackSpeedState from '../../state/playbackSpeed';
import FrameControls from './FrameControls';
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


  // TODO: Avoid passing `incrementFrame` through this component?
  return (
    <div className='animation-controls-container'>
      <Slider
        playback={appState.playback}
        currentFrame={props.frame}
        handleSetFrame={handleSetFrame}
        totalFrames={props.totalFrames} />
      <div>
        <PlaybackSpeed
          playbackSpeed={appState.playbackSpeed}
          handleChangeSpeed={handleChangeSpeed} />
        <PlayPause
          handleTogglePlayback={handleTogglePlayback}
          playback={appState.playback} />
        <FrameControls
          playback={appState.playback}
          onIncrement={props.incrementFrame}
          onDecrement={props.decrementFrame} />
      </div>
    </div>
  );
}
export default AnimationControls;
