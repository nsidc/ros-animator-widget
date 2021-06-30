import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import '../../style/FrameControls.css';
import { stateType as playbackStateType } from '../../state/playback';
import { useParams } from '../../state/params';


interface IFrameControlsProps {
  playback: playbackStateType;
  onIncrement: () => void;
  onDecrement: () => void;
}

const FrameControls: React.FC<IFrameControlsProps> = (props) => {
  const { appId } = useParams();

  return (
    <div className={'frame-controls-container'}>

      <div
        className={'frame-control'}
        data-for={appId}
        data-tip={'Previous frame'}>
        <button
          disabled={props.playback === 'PLAYING'}
          onClick={props.onDecrement}>
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
      </div>

      <div
        className={'frame-control'}
        data-for={appId}
        data-tip={'Next frame'}>
        <button disabled={props.playback === 'PLAYING'}
                onClick={props.onIncrement}>
          <FontAwesomeIcon icon={faStepForward} />
        </button>

      </div>
    </div>
  );
}

export default FrameControls;
