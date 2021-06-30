import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import '../../style/FrameControls.css';
import { stateType as playbackStateType } from '../../state/playback';


interface IFrameControlsProps {
  playback: playbackStateType;
  onIncrement: () => void;
  onDecrement: () => void;
}

const FrameControls: React.FC<IFrameControlsProps> = (props) => {
  return (
    <div className={'frame-controls-container'}>
      <button disabled={props.playback === 'PLAYING'}
              onClick={props.onDecrement}>
        <FontAwesomeIcon icon={faStepBackward} />
      </button>
      <button disabled={props.playback === 'PLAYING'}
              onClick={props.onIncrement}>
        <FontAwesomeIcon icon={faStepForward} />
      </button>
    </div>
  );
}

export default FrameControls;
